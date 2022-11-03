using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace Domain
{
    public class AppUser : IdentityUser
    {

        public String DisplayName { get; set; }
        

         public ICollection<Rezervimi> Shtepite { get; set; }=new List<Rezervimi>();

         public ICollection<Rezervimi> Rezervimet { get; set; } = new List<Rezervimi>();

         public ICollection<RezervimiAttendee>Rezervimi {get; set;}

         public ICollection<Photo> Photos {get; set;}
    }
}