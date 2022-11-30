
using System;
using Domain;
using Microsoft.AspNetCore.Identity;

namespace Domain
{
    public class AppUserRole : IdentityUserRole<Guid>
    {
        public AppUser User { get; set; }
        public AppRole Role { get; set; }
    }
}