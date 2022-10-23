using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public class StafiShtepia
    {
        public  Guid StafiId { get; set;}

        public Stafi Stafi { get; set;}

        public Guid ShtepiaId { get; set;}

        public Shtepia Shtepia { get; set;}
    }
}