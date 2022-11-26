

            using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class SeedAdmin
    {

       


        public static async Task SeedAdmine(UserManager<AppUser> userManager, 
            RoleManager<AppRole> roleManager)
        {

              var admin = new AppUser
            {
             DisplayName="Admin12", UserName="Admin12", Email="admin12@test.com"
            };

            await userManager.CreateAsync(admin, "Pa$$w0rd");
            await userManager.AddToRoleAsync(admin, "Moderator");

            

          
        }


    }

}
