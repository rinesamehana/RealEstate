using System;
using System.Collections.Generic;
using Domain;

namespace API.Profiles
{
   public class UserProfile
    {
        public Guid Id { get; set; }
        public DateTime Check_in { get; set; }
        public DateTime Check_out { get; set; }
        public string nrPersonave { get; set; }
        public string Pagesa { get; set; }

        // public ICollection<Rezervimi> Rezervimet { get; set; } = new List<Rezervimi>();


    }
}
