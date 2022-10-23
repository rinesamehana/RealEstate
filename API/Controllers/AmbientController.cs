using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.AmbientiA;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class AmbientController : BaseApiController
    {


        [HttpGet]
        public async Task<IActionResult> GetAmbientet()
        {
            return HandleResult(await Mediator.Send(new List.Query()));
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetAmbient(Guid id)
        {


            return HandleResult(await Mediator.Send(new Details.Query { AmbientiId = id }));

        }
        [HttpPost]
        public async Task<IActionResult> Create(Ambienti ambienti)
        {
            return HandleResult(await Mediator.Send(new Create.Command { Ambienti = ambienti }));
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> Edit(Guid id, Ambienti ambienti)
        {
            ambienti.AmbientiId = id;
            return HandleResult(await Mediator.Send(new Edit.Command { Ambienti = ambienti }));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            return HandleResult(await Mediator.Send(new Delete.Command { AmbientiId = id }));
        }

    }
}