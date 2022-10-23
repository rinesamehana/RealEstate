using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Domain

{

    public class RoliUser
    {
        [Key]
        public Guid RoliId { get; set; }
        public string Roli { get; set; }

        public ICollection<Stafi> Stafii { get; set; }

    }

}