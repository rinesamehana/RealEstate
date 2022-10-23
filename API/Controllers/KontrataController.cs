using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.KontrataA;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class KontrataController : BaseApiController
    {
        [HttpGet]
        public async Task<IActionResult> GetKontratat()
        {
            return HandleResult(await Mediator.Send(new List.Query()));
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetKontraten(Guid id)
        {
            return HandleResult(await Mediator.Send(new Details.Query { KontrataId = id }));
        }
        [HttpPost]
        public async Task<IActionResult> CreateKontrate(Kontrata kontrata)
        {
            return HandleResult(await Mediator.Send(new CreateKontrat.Command { Kontrata = kontrata }));
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> EditKontrate(Guid id, Kontrata kontrata)
        {
            kontrata.KontrataId = id;
            return HandleResult(await Mediator.Send(new EditKontrat.Command { Kontrata = kontrata }));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteKontrate(Guid id)
        {
            return HandleResult(await Mediator.Send(new DeleteKontrat.Command { kontrataId = id }));
        }
    }
}