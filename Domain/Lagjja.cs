using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public class Lagjja
    {
        [Key]
        public Guid LagjjaId { get; set; }
        public String Emri { get; set; } = string.Empty;

        public Guid? QytetiId { get; set; }
        [ForeignKey("QytetiId")]

        public Qyteti Qyteti { get; set; }

        public ICollection<Shtepia> Shtepite { get; set; }




    }
}