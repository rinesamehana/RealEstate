using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.PajisjaA;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class PajisjaController : BaseApiController
    {
        [HttpGet]
        public async Task<IActionResult> GetPajisjet()
        {
            return HandleResult(await Mediator.Send(new List.Query()));
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetPajisjet(Guid id)
        {
            return HandleResult(await Mediator.Send(new Details.Query { PajisjaId = id }));
        }
        [HttpPost]
        public async Task<IActionResult> CreatePajisja(Pajisja pajisja)
        {
            return HandleResult(await Mediator.Send(new CreatePajisja.Command { Pajisja = pajisja }));
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> EditPajisja(Guid id, Pajisja pajisja)
        {
            pajisja.PajisjaId = id;
            return HandleResult(await Mediator.Send(new EditPajisja.Command { Pajisja = pajisja }));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePajisja(Guid id)
        {
            return HandleResult(await Mediator.Send(new DeletePajisja.Command { PajisjaId = id }));
        }
    }
}