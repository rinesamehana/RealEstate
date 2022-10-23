using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.GjendjaShtepiseA;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class GjendjaController : BaseApiController
    {


        [HttpGet]
        public async Task<IActionResult> GetGjendjet()
        {
            return HandleResult(await Mediator.Send(new List.Query()));

        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetGjendja(Guid id)
        {
            return HandleResult(await Mediator.Send(new Details.Query {GjendjaId = id }));
        }


        [HttpPost]
        public async Task<IActionResult> CreateGjendje(GjendjaShtepise gjendjaShtepise)
        {
             return HandleResult(await Mediator.Send(new Create.Command {GjendjaShtepise = gjendjaShtepise }));
        }

        [HttpPut("{id}")]

        public async Task<IActionResult> EditGjendje(Guid id, GjendjaShtepise gjendjaShtepise)
        {
            gjendjaShtepise.GjendjaId = id;
            return HandleResult(await Mediator.Send(new Edit.Command {GjendjaShtepise = gjendjaShtepise }));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteGjendje(Guid id)
        {
             return HandleResult(await Mediator.Send(new Delete.Command { GjendjaId = id }));
        }
    }
}