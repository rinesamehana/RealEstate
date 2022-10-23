using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Domain

{

    public class Pajisja
    {
        [Key]
        public Guid PajisjaId { get; set; }
        public string LlojiPajisjes {get; set;}=string.Empty;

         public ICollection<ShtepiaPajisjet> Shtepite { get; set; }

      

        
    }

}