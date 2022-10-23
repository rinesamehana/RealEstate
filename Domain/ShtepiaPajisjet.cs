using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public class ShtepiaPajisjet
    {

        public Guid ShtepiaId { get; set; }

        public Shtepia Shtepia { get; set; }
        public Guid? PajisjaId { get; set; }

        public Pajisja Pajisja { get; set; }

    }
}