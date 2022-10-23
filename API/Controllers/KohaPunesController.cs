using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.KohaEPunesA;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class KohaPunesController : BaseApiController
    {


        [HttpGet]
        public async Task<IActionResult> GetKohen()
        {
           return HandleResult(await Mediator.Send(new List.Query()));
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetKohen(Guid id)
        {
             return HandleResult(await Mediator.Send(new Details.Query {KohaId = id }));
        }
        [HttpPost]
        public async Task<IActionResult> Create(KohaEPunes kohaEPunes)
        {
            return HandleResult(await Mediator.Send(new Create.Command {KohaEPunes = kohaEPunes }));
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> Edit(Guid id, KohaEPunes kohaEPunes)
        {
            kohaEPunes.KohaId = id;
            return HandleResult(await Mediator.Send(new Edit.Command { KohaEPunes = kohaEPunes }));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            return HandleResult(await Mediator.Send(new Delete.Command { KohaId = id }));
        }

    }
}