using System.Collections.Generic;
using Domain;

namespace Application.Profiles
{
    public class Profile
    {
        public string Username{get;set;} = string.Empty;

        public string DisplayName{get;set;} = string.Empty;

        // public string Bio {get; set;}

        public string Image{get;set;} = string.Empty;

        public ICollection<Photo> Photos {get;set;}
    }
}