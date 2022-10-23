using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;


namespace Domain
{
    public class MenyraPageses
    {

        [Key]
        public Guid MenyraPagesesId { get; set; }

        public string MenyraePageses{ get; set; } = string.Empty;


        


      public ICollection<Rezervimi> Rezervimet { get; set; }

     

    }
}