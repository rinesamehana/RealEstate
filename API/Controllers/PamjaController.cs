using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.PamjaA;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class PamjaController : BaseApiController
    {


        [HttpGet]
         [Authorize(Roles ="Moderator")]
        public async Task<IActionResult> GetPamjet()
        {
            return HandleResult(await Mediator.Send(new List.Query()));

        }

        [HttpGet("{id}")]
         [Authorize(Roles ="Moderator")]
        public async Task<IActionResult> GetPamjet(Guid id)
        {
            return HandleResult(await Mediator.Send(new Details.Query { PamjaId = id }));
        }


        [HttpPost]
         [Authorize(Roles ="Moderator")]
        public async Task<IActionResult> CreatePamjet(Pamja pamja)
        {
            return HandleResult(await Mediator.Send(new Create.Command { Pamja= pamja }));
        }

        [HttpPut("{id}")]
         [Authorize(Roles ="Moderator")]

        public async Task<IActionResult> EditPamjet(Guid id, Pamja pamja)
        {
            pamja.PamjaId = id;
            return HandleResult(await Mediator.Send(new Edit.Command { Pamja = pamja }));
        }

        [HttpDelete("{id}")]
         [Authorize(Roles ="Moderator")]
        public async Task<IActionResult> DeletePamjet(Guid id)
        {
            return HandleResult(await Mediator.Send(new Delete.Command { PamjaId = id }));
        }
    }
}
