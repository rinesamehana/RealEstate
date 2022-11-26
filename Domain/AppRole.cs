using System;
using System.Collections.Generic;
using Domain;
using Microsoft.AspNetCore.Identity;

namespace Domain
{
    public class AppRole : IdentityRole<Guid>
    {
        public ICollection<AppUserRole> UserRoles { get; set; }
    }
}