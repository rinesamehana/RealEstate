using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Security.Claims;
using System.Threading.Tasks;
using API.DTOs;
using API.Services;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using Persistence;

namespace API.Controllers
{
    [AllowAnonymous]
    [ApiController]
    [Route("api/[controller]")]
    public class AccountController : ControllerBase

    {
        private readonly UserManager<AppUser> _userManager;

        private readonly SignInManager<AppUser> _signInManager;
        private readonly TokenService _tokenService;
        private readonly IMapper _mapper;
        private readonly DataContext _context;
        private readonly IConfiguration _config;

         private readonly HttpClient _httpClient;

        public AccountController(UserManager<AppUser> userManager, SignInManager<AppUser> signInManager, TokenService tokenService, IMapper mapper, DataContext context , IConfiguration config)
        {
            _config = config;
            _tokenService = tokenService;
            _mapper = mapper;
            _context = context;
            _userManager = userManager;
            _signInManager = signInManager;
             _httpClient = new HttpClient
            {
                BaseAddress = new System.Uri("https://graph.facebook.com")
            };
        }

        [HttpPost("login")]
        public async Task<ActionResult<UserDto>> Login(LoginDto loginDto)
        {
            //var user = await _userManager.FindByEmailAsync(loginDto.Email);

             var user = await _userManager.Users.Include(p => p.Photos)
                .FirstOrDefaultAsync(x => x.Email == loginDto.Email);

            if (user == null) return Unauthorized();
            var result = await _signInManager.CheckPasswordSignInAsync(user, loginDto.Password, false);

            if (result.Succeeded)
            {
                return await CreateUserObjectAsync(user);
            }
            return Unauthorized();
        }
        [HttpPost("register")]
        public async Task<ActionResult<UserDto>> Register(RegisterDto registerDto)
        { 
            if (await _userManager.Users.AnyAsync(x => x.Email == registerDto.Email))
            {
                ModelState.AddModelError("email", "Email taken");
                return ValidationProblem();
          
            }
            if (await _userManager.Users.AnyAsync(x => x.UserName == registerDto.Username))
            {
                    ModelState.AddModelError("username", "Username taken");
                    return ValidationProblem();
            }

            var user = new AppUser
            {
                DisplayName = registerDto.DisplayName,
                Email = registerDto.Email,
                UserName = registerDto.Username
            };

            var result = await _userManager.CreateAsync(user, registerDto.Password);

            if (result.Succeeded)
            {
                await _userManager.AddToRoleAsync(user, "Member");
                return await CreateUserObjectAsync(user);
            }
            return BadRequest("Problem registering user");

        }
        // [Authorize]
        [HttpGet]
      public async Task<ActionResult<GetUserDto>> GetCurrentUser()
        {
            var user = await _userManager.FindByEmailAsync(User.FindFirstValue(ClaimTypes.Email));

            var userR = await _context.Users.ProjectTo<GetUserDto>(_mapper.ConfigurationProvider)
                .FirstOrDefaultAsync(x => x.Id == user.Id);
            userR.Token = await _tokenService.CreateToken(user);
            userR.Roli = await _userManager.GetRolesAsync(user);
            return userR;
        }

          [HttpPost("fbLogin")]
        public async Task<ActionResult<UserDto>> FacebookLogin(string accessToken)
        {
            var fbVerifyKeys = _config["Facebook:AppId"] + "|" + _config["Facebook:AppSecret"];

            var verifyToken = await _httpClient
                .GetAsync($"debug_token?input_token={accessToken}&access_token={fbVerifyKeys}");

            if (!verifyToken.IsSuccessStatusCode) return Unauthorized();

            var fbUrl = $"me?access_token={accessToken}&fields=name,email,picture.width(100).height(100)";

            var response = await _httpClient.GetAsync(fbUrl);

            if (!response.IsSuccessStatusCode) return Unauthorized();


            var fbInfo = JsonConvert.DeserializeObject<dynamic>(await response.Content.ReadAsStringAsync());

            var username = (string)fbInfo.id;

             var user = await _userManager.Users.Include(p => p.Photos)
                .FirstOrDefaultAsync(x => x.UserName == username);

              if (user != null) return await CreateUserObjectAsync(user);

            user = new AppUser
            {
                DisplayName = (string)fbInfo.name,
                Email = (string)fbInfo.email,
                UserName = (string)fbInfo.id,
                Photos = new List<Photo>
            {
                new Photo
                {
                    Id = "fb_" + (string)fbInfo.id,
                    Url = (string)fbInfo.picture.data.url,
                    IsMain = true
                }}
            };   

            var result = await _userManager.CreateAsync(user);
           if (!result.Succeeded) return BadRequest("Problem creating user account");

           return await CreateUserObjectAsync(user);
            
        }












        private async Task<UserDto> CreateUserObjectAsync(AppUser user)
        {
            return  new UserDto
            {
                DisplayName = user.DisplayName,
                Image = user?.Photos?.FirstOrDefault(x=> x.IsMain)?.Url,
                Token = await _tokenService.CreateToken(user),
                Username = user.UserName,
            };
        }



    }
}