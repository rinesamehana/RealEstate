using System;
using System.ComponentModel.DataAnnotations.Schema;
namespace Domain
{
    public class RezervimiAttendee
    {

        public Guid Id { get; set; }
        public Guid AppUserId {get; set;}

        public AppUser AppUser {get; set;}
        [ForeignKey("RezervimiId")]
        public Guid? RezervimiId{get; set;}
        
        public Rezervimi Rezervimi {get; set;}

        public decimal Cmimi { get; set; }
        public bool IsHost {get; set;}
    }
}