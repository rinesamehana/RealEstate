using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public class Stafi
    {
        public Guid StafiId { get; set; }

        public String Photo { get; set; }
        public String Emri { get; set; }

        public String Mbiemri { get; set; }
 
        public String Email { get; set; }

        public String NrTelefonit { get; set; }

        public Guid? RoliId { get; set; }
        [ForeignKey("RoliId")]
        public RoliUser RoliUser { get; set; }

        public Guid? LlojiUserId { get; set; }
        [ForeignKey("LlojiUserId")]
        public LlojiUser LlojiUser { get; set; }

        public Guid? KohaId { get; set; }
        [ForeignKey("KohaId")]
        public KohaEPunes KohaEPunes { get; set; }
        public Guid? GjiniaId { get; set; }
        [ForeignKey("GjiniaId")]
        public Gjinia Gjinia { get; set; }
        public Guid? QytetiId { get; set; }
        [ForeignKey("QytetiId")]
        public Qyteti Qyteti { get; set; }
        public Guid? ShtetiId { get; set; }
        [ForeignKey("ShtetiId")]
        public Shteti Shteti { get; set; }

        public String Adresa { get; set; }

        


        public ICollection<Shtepia> Shtepite { get; set; }

        
        



    }
}