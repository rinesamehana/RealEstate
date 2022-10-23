using System;
using System.Collections.Generic;

using System.ComponentModel.DataAnnotations;

using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public class LlojiShtepise
    {

        [Key]
        public Guid LlojiShtepiseId { get; set; }

        public String LlojiiShtepise { get; set; } = string.Empty;
        

        public ICollection<Shtepia> Shtepite{ get; set; }
    }
}