using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text.Json.Serialization;

using System.Threading.Tasks;
using Application.Profiles;

namespace Application.StafiA
{
    public class StafiDto
    {
         public Guid StafiId { get; set; }

        public String Emri { get; set; }

        public String Mbiemri { get; set; }

        public String Email { get; set; }

        public String NrTelefonit { get; set; }

        public String Adresa { get; set; }


        public string HostUsername{get;set;}

        public bool IsCancelled{get;set;}

        public ICollection<Profile> Shtepiat {get;set;}
    }
}