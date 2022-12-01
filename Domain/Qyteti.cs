using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text.Json.Serialization;

using System.Threading.Tasks;

namespace Domain
{
    public class Qyteti
    {
        [Key]
        public Guid QytetiId { get; set; }
          public string Photo { get; set; }
        public string Emri { get; set; } 

        public string KodiPostar { get; set; }



        public Guid ShtetiId { get; set; }

        public Shteti Shteti { get; set; }

        public ICollection<Lagjja> Lagjet { get; set; }

        public ICollection<Stafi> Stafii { get; set; }

        public ICollection<Shtepia> Shtepite { get; set; }

    }
}