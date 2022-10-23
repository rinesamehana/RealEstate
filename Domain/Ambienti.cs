using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public class Ambienti
    {
        [Key]
        public Guid AmbientiId { get; set; }

        public String LlojiAmbient { get; set; }

        public ICollection<ShtepiaAmbiente> Shtepite { get; set; }
    }
}