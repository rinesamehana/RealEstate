using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text.Json.Serialization;

using System.Threading.Tasks;
using Application.Profiles;
namespace Application.ShtepiaA
{
    public class ShtepiaDto
    {
          public Guid ShtepiaId { get; set; }

        public string PhotoUrl {get;set;}

        public string Lokacioni { get; set; } = string.Empty;

        public string Cmimi {get;set;}

        public string NrDhomave {get;set;}

        public string NrBanjove{get;set;}

        public string Siperfaqja {get;set;}

        public string Pershkrimi {get;set;}


     
    }
}