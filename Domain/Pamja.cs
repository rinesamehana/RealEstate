using System;
using System.Collections.Generic;

using System.ComponentModel.DataAnnotations;

using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public class Pamja
    {

        [Key]
        public Guid PamjaId { get; set; }

        public string Pamjaa { get; set; } = string.Empty;



        public ICollection<Shtepia> Shtepite { get; set; }


    }
}