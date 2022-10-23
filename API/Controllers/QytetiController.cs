using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;
using MediatR;
using Application.QytetiA;

namespace API.Controllers
{
    public class QytetiController : BaseApiController
    {

        [HttpGet]
        public async Task<IActionResult> GetQytetet()
        {
            return HandleResult(await Mediator.Send(new List.Query()));



        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetQytetet(Guid id)
        {

            return HandleResult(await Mediator.Send(new Details.Query { QytetiId = id }));
        }


        [HttpPost]
        public async Task<IActionResult> CreateQyteti(Qyteti qyteti)
        {
            return HandleResult(await Mediator.Send(new Create.Command { Qyteti = qyteti }));
        }



        [HttpPut("{id}")]

        public async Task<IActionResult> EditQyteti(Guid id, Qyteti qyteti)
        {
            qyteti.QytetiId = id;
            return HandleResult(await Mediator.Send(new Edit.Command { Qyteti = qyteti }));
        }


        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteQyteti(Guid id)
        {
            return HandleResult(await Mediator.Send(new Delete.Command { QytetiId = id }));
        }

    }
}
