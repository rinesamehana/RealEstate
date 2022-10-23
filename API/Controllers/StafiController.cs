using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.StafiA;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class StafiController : BaseApiController
    {


        [HttpGet]
        public async Task<IActionResult> GetStafinn()
        {
            return HandleResult(await Mediator.Send(new List.Query()));

        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetStafin(Guid id)
        {
            return HandleResult(await Mediator.Send(new Details.Query { StafiId = id }));
        }


        [HttpPost]
        public async Task<IActionResult> CreateStafin(Stafi stafi)
        {
            return HandleResult(await Mediator.Send(new Create.Command { Stafi = stafi }));
        }

        [HttpPut("{id}")]

        public async Task<IActionResult> EditStafin(Guid id, Stafi stafi)
        {
            stafi.StafiId = id;
            return HandleResult(await Mediator.Send(new Edit.Command { Stafi = stafi }));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteStafin(Guid id)
        {
            return HandleResult(await Mediator.Send(new Delete.Command { StafiId = id }));
        }
    }
}
