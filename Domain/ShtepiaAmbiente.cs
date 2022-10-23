using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public class ShtepiaAmbiente
    {

        public Guid? ShtepiaId { get; set; }
        public Shtepia Shtepia { get; set; }
        public Guid? AmbientiId { get; set; }
        public Ambienti Ambienti { get; set; }



    }
}