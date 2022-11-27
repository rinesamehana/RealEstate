using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;
using MediatR;
using Application.RezervimA;
using Microsoft.AspNetCore.Authorization;

namespace API.Controllers
{
    public class RezervimiController : BaseApiController
    {

  [AllowAnonymous]
        [HttpGet]
        
        public async Task<IActionResult> GetRezervimet()
        {
            return HandleResult(await Mediator.Send(new List.Query()));
        }
  [AllowAnonymous]
        [HttpGet("{id}")]
        public async Task<IActionResult> GetRezervim(Guid id)
        {


            return HandleResult(await Mediator.Send(new Details.Query { RezervimiId = id }));

        }
        [HttpPost]

         [AllowAnonymous]
        public async Task<IActionResult> Create(Rezervimi rezervimi)
        {
            return HandleResult(await Mediator.Send(new Create.Command { Rezervimi = rezervimi }));
        }
      [AllowAnonymous]
        [HttpPut("{id}")]
        public async Task<IActionResult> Edit(Guid id, Rezervimi rezervimi)
        {
            rezervimi.RezervimiId = id;
            return HandleResult(await Mediator.Send(new Edit.Command { Rezervimi = rezervimi }));
        }
       [AllowAnonymous]
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            return HandleResult(await Mediator.Send(new Delete.Command { RezervimiId = id }));
        }

        [HttpPost("{id}/attend")]
        public async Task<IActionResult>Attend(Guid id)
        {
            return HandleResult(await Mediator.Send(new UpdateAttendance.Command{Id=id}));
        }

    }
}