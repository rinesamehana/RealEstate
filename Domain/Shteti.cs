using System;
using System.Collections.Generic;

using System.ComponentModel.DataAnnotations;

using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public class Shteti
    {

        [Key]
        public Guid ShtetiId { get; set; }

        public string Emri { get; set; } = string.Empty;

        public string Shkurtesa { get; set; } = string.Empty;

        public ICollection<Qyteti> Qytetet { get; set; }= new List<Qyteti>();
        public ICollection<Stafi> Stafii { get; set; }


    }
}