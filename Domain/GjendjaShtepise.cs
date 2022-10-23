using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public class GjendjaShtepise
    {
        [Key]
        public Guid GjendjaId { get; set; }
        public String Gjendja { get; set; } = string.Empty;

        public ICollection<Shtepia> Shtepite{ get; set; }
    }
}
