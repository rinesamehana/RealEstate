using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Domain

{

    public class KohaEPunes
    {
        [Key]
        public Guid KohaId { get; set; }
        public string KohaEPuness { get; set; } = string.Empty;
        public String Koha { get; set; } = string.Empty;

        public ICollection<Stafi> Stafii { get; set; }



    }

}