using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public class Gjinia
    {
        [Key]

        public Guid GjiniaId { get; set; }


        public String Lloji { get; set; } = string.Empty;

        public ICollection<Stafi> Stafii { get; set; }

    }
}