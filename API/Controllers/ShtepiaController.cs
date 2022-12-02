using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Application.ShtepiaA;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class ShtepiaController : BaseApiController
    {

        [AllowAnonymous]
        [HttpGet]
        public async Task<IActionResult> GetShtepiat([FromQuery]PagingParams param)
        {
            return HandlePagedResult(await Mediator.Send(new List.Query{Params = param}));
        }
        [AllowAnonymous]
        [HttpGet("{id}")]
        public async Task<IActionResult> GetShtepin(Guid id)
        {


            return HandleResult(await Mediator.Send(new Details.Query { ShtepiaId = id }));

        }
        [HttpPost]
         [Authorize(Roles ="Moderator")]
        public async Task<IActionResult> Create(Shtepia shtepia)
        {
            return HandleResult(await Mediator.Send(new Create.Command { Shtepia = shtepia }));
        }
        [HttpPut("{id}")]
         [Authorize(Roles ="Moderator")]
        public async Task<IActionResult> Edit(Guid id, Shtepia shtepia)
        {
            shtepia.ShtepiaId = id;
            return HandleResult(await Mediator.Send(new Edit.Command { Shtepia = shtepia }));
        }

        [HttpDelete("{id}")]
         [Authorize(Roles ="Moderator")]
        public async Task<IActionResult> Delete(Guid id)
        {
            return HandleResult(await Mediator.Send(new Delete.Command { ShtepiaId = id }));
        }

    }
}