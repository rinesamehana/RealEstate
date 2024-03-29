using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.ShtetiA;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class ShtetiController : BaseApiController
    {


        [HttpGet]
         [Authorize(Roles ="Moderator")]
        public async Task<IActionResult> GetShtetet()
        {
            return HandleResult(await Mediator.Send(new List.Query()));

        }

        [HttpGet("{id}")]
         [Authorize(Roles ="Moderator")]
        public async Task<IActionResult> GetShteti(Guid id)
        {
            return HandleResult(await Mediator.Send(new Details.Query { ShtetiId = id }));
        }


        [HttpPost]
         [Authorize(Roles ="Moderator")]
        public async Task<IActionResult> CreateShteti(Shteti shteti)
        {
            return HandleResult(await Mediator.Send(new Create.Command { Shteti = shteti }));
        }

        [HttpPut("{id}")]
         [Authorize(Roles ="Moderator")]

        public async Task<IActionResult> EditShteti(Guid id, Shteti shteti)
        {
            shteti.ShtetiId = id;

            return HandleResult(await Mediator.Send(new Edit.Command { Shteti = shteti }));
        }

        [HttpDelete("{id}")]
         [Authorize(Roles ="Moderator")]
        public async Task<IActionResult> DeleteShteti(Guid id)
        {
            return HandleResult(await Mediator.Send(new Delete.Command { ShtetiId = id }));
        }
    }
}
