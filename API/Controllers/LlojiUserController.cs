using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.LlojiUserA;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class LlojiUserController : BaseApiController
    {


        [HttpGet]
        public async Task<IActionResult> GetLlojetUserit()
        {
            return HandleResult(await Mediator.Send(new List.Query()));
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetLlojUseri(Guid id)
        {


            return HandleResult(await Mediator.Send(new Details.Query { LlojiUserId = id }));

        }
        [HttpPost]
        public async Task<IActionResult> Create(LlojiUser llojiUser)
        {
            return HandleResult(await Mediator.Send(new Create.Command { LlojiUser = llojiUser }));
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> Edit(Guid id, LlojiUser llojiUser)
        {
            llojiUser.LlojiUserId = id;
            return HandleResult(await Mediator.Send(new Edit.Command { LlojiUser = llojiUser }));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            return HandleResult(await Mediator.Send(new Delete.Command { LlojiUserId = id }));
        }

    }
}