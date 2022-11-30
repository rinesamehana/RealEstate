using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text.Json.Serialization;

using System.Threading.Tasks;

namespace Domain
{
    public class Rezervimi
    {
         
  //       public Guid RezervimiId { get; set; }

  //               // public string nrRezervimit { get; set; } = string.Empty;

  //       public DateTime Check_in { get; set; }

  //       public DateTime Check_out { get; set; }

  //     //   public string AppUserId { get; set; }
  //     //      [ForeignKey("AppUserId")]
  //     //   public AppUser AppUser { get; set; }
  //  //      public Guid? ShtepiaId {get;set;}
  //  //         [ForeignKey("ShtepiaId")]
  //  //      public Shtepia Shtepia {get;set;}

  //  //       public Guid? MenyraPagesesId { get; set; }
  //  //   [ForeignKey("MenyraPagesesId")]

  //  //    public MenyraPageses MenyraPageses { get; set; }

  //  //    public Guid? KontrataId{get;set;}
  //  //       [ForeignKey("KontrataId")]
  //  //    public Kontrata Kontrata{get;set;}
      
  //     // public bool IsHost {get;set;}

  //   //   public bool IsCancelled{get;set;}
       
  //      public Guid AppUserId { get; set; } 
  //       public AppUser? AppUser { get; set; }
  //   //    public ICollection<RezervimiAttendee> Attendees{get; set;}=new List<RezervimiAttendee>();

      
     
  //   }

    
        public Guid RezervimiId { get; set; }
        public DateTime Check_in { get; set; }
        public DateTime Check_out { get; set; }
        public string nrPersonave { get; set; }
        public string Pagesa { get; set; }
        public Guid AppUserId { get; set; } 
        public AppUser AppUser { get; set; }

        
    }
}