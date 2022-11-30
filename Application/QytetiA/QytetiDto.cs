using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.QytetiA
{
    public class QytetiDto
    {
        public Guid QytetiId { get; set; }
        public string Emri { get; set; } 
        public string Photo { get; set; }
        public string KodiPostar { get; set; }
        public Guid ShtetiId { get; set; }
    }
}