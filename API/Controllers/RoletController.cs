using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.RoliA;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class RoletController : BaseApiController
    {


        [HttpGet]
         [Authorize(Roles ="Moderator")]
            public async Task<IActionResult> GetRolin()
        {
            return HandleResult(await Mediator.Send(new List.Query()));
        }
        [HttpGet("{id}")]
         [Authorize(Roles ="Moderator")]
        public async Task<IActionResult> GetRolin(Guid id)
        {
            return HandleResult(await Mediator.Send(new Details.Query { RoliId = id }));
        }
        [HttpPost]
         [Authorize(Roles ="Moderator")]
        public async Task<IActionResult> CreateRoli(RoliUser roliUser)
        {
            return HandleResult(await Mediator.Send(new CreateRoli.Command { RoliUser = roliUser }));
        }
        [HttpPut("{id}")]
         [Authorize(Roles ="Moderator")]
        public async Task<IActionResult> EditRoli(Guid id, RoliUser roliUser)
        {
            roliUser.RoliId = id;
            return HandleResult(await Mediator.Send(new EditRoli.Command { RoliUser = roliUser }));
        }

        [HttpDelete("{id}")]
         [Authorize(Roles ="Moderator")]
        public async Task<IActionResult> DeleteRoli(Guid id)
        {
            return HandleResult(await Mediator.Send(new DeleteRoli.Command { RoliId = id }));
        }

    }
}