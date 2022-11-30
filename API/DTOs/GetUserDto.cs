using System.Collections.Generic;
using API.Profiles;
using System;

namespace API.DTOs
{
    public class GetUserDto
    {
        public Guid Id { get; set; }
        public string DisplayName { get; set; }
        public string Token { get; set; }
        public string Username { get; set; }
        public string Image { get; set; }

        public ICollection<string> Roli { get; set; }
        public ICollection<UserProfile> Rezervimet { get; set; }
    }
}