using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.ShtepiaA;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class ShtepiaController : BaseApiController
    {


        [HttpGet]
        public async Task<IActionResult> GetShtepiat()
        {
            return HandleResult(await Mediator.Send(new List.Query()));
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetShtepin(Guid id)
        {


            return HandleResult(await Mediator.Send(new Details.Query { ShtepiaId = id }));

        }
        [HttpPost]
        public async Task<IActionResult> Create(Shtepia shtepia)
        {
            return HandleResult(await Mediator.Send(new Create.Command { Shtepia = shtepia }));
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> Edit(Guid id, Shtepia shtepia)
        {
            shtepia.ShtepiaId = id;
            return HandleResult(await Mediator.Send(new Edit.Command { Shtepia = shtepia }));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            return HandleResult(await Mediator.Send(new Delete.Command { ShtepiaId = id }));
        }

    }
}