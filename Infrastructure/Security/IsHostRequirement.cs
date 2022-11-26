using System;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Infrastructure.Security

{
    public class IsHostRequirement : IAuthorizationRequirement
    {
        
    }

    public class IsHostRequirementHandler : AuthorizationHandler<IsHostRequirement>
    {
        private readonly DataContext _dbcontext;
        private readonly IHttpContextAccessor _httpContextAccessor;

        public IsHostRequirementHandler(DataContext dbcontext, IHttpContextAccessor httpContextAccessor)
        {
            _dbcontext = dbcontext;
            _httpContextAccessor = httpContextAccessor;
        }

        protected override Task HandleRequirementAsync(AuthorizationHandlerContext context, IsHostRequirement requirement)
        {
           var userId = context.User.FindFirstValue(ClaimTypes.NameIdentifier);
            
            if(userId==null) return Task.CompletedTask;

            var RezervimiId=Guid.Parse(_httpContextAccessor.HttpContext?
            .Request.RouteValues.SingleOrDefault(x=>x.Key=="id").Value?.ToString());


            var attendee=_dbcontext.RezervimiAttendees
            .AsNoTracking()
            .SingleOrDefaultAsync(x=>x.AppUserId.Equals(userId) && x.RezervimiId==RezervimiId).Result;

            if(attendee==null) return Task.CompletedTask;

            if(attendee.IsHost) context.Succeed(requirement);

            return Task.CompletedTask;
        }
    }
}