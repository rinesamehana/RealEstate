using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using API.Services;
using Domain;
using Infrastructure.Security;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using Persistence;





namespace API.Extensions
{  
    public static class IdentityServiceExtensions
    {
        public static IServiceCollection
        AddIdentityServices(
            this IServiceCollection services,
            IConfiguration config
        )
        {
           services.AddIdentityCore<AppUser>(opt =>
            {
                opt.Password.RequireNonAlphanumeric = false;
            })
                .AddRoles<AppRole>()
                .AddRoleManager<RoleManager<AppRole>>()
                .AddSignInManager<SignInManager<AppUser>>()
                .AddRoleValidator<RoleValidator<AppRole>>()
                .AddEntityFrameworkStores<DataContext>();
                

            var key =
                new SymmetricSecurityKey(Encoding
                        .UTF8
                        .GetBytes(config["TokenKey"]));
            services
                .AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(opt =>
                {
                    opt.TokenValidationParameters =
                        new TokenValidationParameters {
                            ValidateIssuerSigningKey = true,
                            IssuerSigningKey = key,
                            ValidateIssuer = false,
                            ValidateAudience = false
                        };
                        opt.Events = new JwtBearerEvents
                    {
                        OnMessageReceived = context => 
                        {
                            var accessToken = context.Request.Query["access_token"];
                            var path = context.HttpContext.Request.Path;
                          if(!string.IsNullOrEmpty(accessToken) && (path.StartsWithSegments("/chat")))
                          {
                            context.Token=accessToken;
                          }

                            return Task.CompletedTask;
                        }
                    };
                });
            services
                .AddAuthorization(opt =>
                {
                    opt.AddPolicy("IsRezervimiHost", policy => policy.RequireRole("Member"));
                });
                services.AddAuthorization(opt => 
            {
                opt.AddPolicy("RequireAdminRole", policy => policy.RequireRole("Moderator"));
                 opt.AddPolicy("ModeratePhotoRole", policy => policy.RequireRole("Admin", "Moderator"));
            });
            
            services.AddScoped<TokenService>();
           
services.AddSignalR();
            return services;
        }
    }
}
