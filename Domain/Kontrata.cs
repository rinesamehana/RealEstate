using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;


namespace Domain

{

    public class Kontrata
    {
        [Key]
        public Guid KontrataId { get; set; }
        public string LlojiKontrates {get; set;}=string.Empty;
        
           
       public ICollection<Rezervimi> Rezervimet { get; set; }
    }

}