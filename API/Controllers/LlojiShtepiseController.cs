using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.LlojiShtepiseA;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class LlojiShtepiseController : BaseApiController
    {
        [HttpGet]
         [Authorize(Roles ="Moderator")]
        public async Task<IActionResult> GetLlojiShtepive()
        {
            return HandleResult(await Mediator.Send(new List.Query()));
        }
        [HttpGet("{id}")]
         [Authorize(Roles ="Moderator")]
        public async Task<IActionResult> GetLlojiShtepive(Guid id)
        {
            return HandleResult(await Mediator.Send(new Details.Query { LlojiShtepiseId = id }));
        }
        [HttpPost]
         [Authorize(Roles ="Moderator")]
        public async Task<IActionResult> CreateLlojiShtepise(LlojiShtepise llojishtepise)
        {
            return HandleResult(await Mediator.Send(new Create.Command { LlojiShtepise= llojishtepise}));
        }
        [HttpPut("{id}")]
         [Authorize(Roles ="Moderator")]
        public async Task<IActionResult> EditLlojiShtepise(Guid id, LlojiShtepise llojishtepise)
        {
            llojishtepise.LlojiShtepiseId = id;
            return HandleResult(await Mediator.Send(new Edit.Command { LlojiShtepise = llojishtepise}));
        }

        [HttpDelete("{id}")]
         [Authorize(Roles ="Moderator")]
        public async Task<IActionResult> DeleteLlojishtepise(Guid id)
        {
            return HandleResult(await Mediator.Send(new Delete.Command { LlojiShtepiseId = id }));
        }

    }
}