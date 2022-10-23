using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Domain

{

    public class Kafshet
    {
        [Key]
        public Guid KafshetId { get; set; }
        
        public String LejohenKafshet {get; set;} 

        public ICollection<Shtepia> Shtepite{ get; set; }
   
    }

}