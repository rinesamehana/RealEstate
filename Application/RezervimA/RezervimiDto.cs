using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using Application.Profiles;
using Domain;

namespace Application.RezervimA
{
    // public class RezervimiDto
    // {

    //     public Guid RezervimiId { get; set; }


    //     public DateTime Check_in { get; set; }

    //     public DateTime Check_out { get; set; }

    //   //   public string AppUserId { get; set; }
    //   //      [ForeignKey("AppUserId")]
    //   //   public AppUser AppUser { get; set; }

    //     // public Guid? ShtepiaId {get;set;}
    //     //    [ForeignKey("ShtepiaId")]
    //     // public Shtepia Shtepia {get;set;}

    // //         public Guid? MenyraPagesesId { get; set; }
    // //  [ForeignKey("MenyraPagesesId")]

    // //   public MenyraPageses MenyraPageses { get; set; }

    // //   public Guid? KontrataId{get;set;}
    // //      [ForeignKey("KontrataId")]
    // //   public Kontrata Kontrata{get;set;}

    
    //   // public string HostUsername {get; set;}
    //   // public bool IsCancelled {get;set;}

    
    //   // public ICollection<AttendeeDto> Attendeess {get; set;}

    //           public Profile User { get; set; }
    //   public ICollection<RezervimiAttendee> Attendees { get; set; } = new List<RezervimiAttendee>();

    // }


     public class RezervimiDto
    {
        public Guid RezervimiId { get; set; }
              public DateTime Check_in { get; set; }
        public DateTime Check_out { get; set; }
        public string nrPersonave { get; set; }
        public string Pagesa { get; set; }

        public string Kontrata{get;set;}

       public  string HostName{get;set;}

        // public ICollection<Profile> Profiles {get;set;}
        public Guid AppUserId { get; set; } 
           public Profile User { get; set; }

        

        //    public string Username{get;set;}
        //    public string DisplayName{get;set;}
   

 
    }
}