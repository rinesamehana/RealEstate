using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.LagjjaA;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class LagjjaController : BaseApiController
    {


        [HttpGet]
        public async Task<IActionResult> GetLagjet()
        {
            return HandleResult(await Mediator.Send(new List.Query()));
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetLagjen(Guid id)
        {


            return HandleResult(await Mediator.Send(new Details.Query { LagjjaId = id }));

        }
        [HttpPost]
        public async Task<IActionResult> Create(Lagjja lagjja)
        {
            return HandleResult(await Mediator.Send(new Create.Command { Lagjja = lagjja }));
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> Edit(Guid id, Lagjja lagjja)
        {
            lagjja.LagjjaId = id;
            return HandleResult(await Mediator.Send(new EditLagje.Command { Lagjja = lagjja }));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            return HandleResult(await Mediator.Send(new DeleteLagje.Command { LagjjaId = id }));
        }

    }
}