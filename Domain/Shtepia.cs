using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text.Json.Serialization;

using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace Domain
{
    public class Shtepia
    {
        [Key]
        public Guid ShtepiaId { get; set; }
     
        public string Photo {get;set;}
         public string Photo2 {get;set;}
         public string Photo3 {get;set;}
         public string Photo4 {get;set;}

        public string Titulli {get;set;}
        public string Cmimi {get;set;}

         public string Lokacioni { get; set; } = string.Empty;

        public string NrDhomave {get;set;}

        public string NrBanjove{get;set;}

        public string Siperfaqja {get;set;}

        public string Pershkrimi {get;set;}
        
        

       public Guid? LagjjaId { get; set; }
        [JsonIgnore]
        [ForeignKey("LagjjaId")]
        public Lagjja Lagjja { get; set; }

     public Guid? QytetiId { get; set; }
        [ForeignKey("QytetiId")]
        public Qyteti Qyteti { get; set; }


        public Guid? LlojiShtepiseId { get; set; }
        [JsonIgnore]
        [ForeignKey("LlojiShtepiseId")]
        public LlojiShtepise LlojiShtepise { get; set; }


        public Guid? GjendjaShtepiseId { get; set; }
        [JsonIgnore]
        [ForeignKey("GjendjaShtepiseId")]

        public GjendjaShtepise GjendjaShtepise { get; set; }



        public Guid? PamjaId { get; set; }
        [JsonIgnore]
        [ForeignKey("PamjaId")]

        public Pamja Pamja { get; set; }
        public Guid? KafshetId { get; set; }
        [JsonIgnore]
        [ForeignKey("KafshetId")]
        public Kafshet Kafshet { get; set; }

        
        public Guid? StafiId {get; set;}

       [JsonIgnore]
        [ForeignKey("StafiId")]
        public Stafi Stafi { get; set; }


        public ICollection<ShtepiaAmbiente> Ambientet { get; set; }

        public ICollection<ShtepiaPajisjet> Pajisjet { get; set; }

        public ICollection<Rezervimi> Attendees { get; set; }=new List<Rezervimi>();


    }
}