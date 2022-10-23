using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.MenyraPagesesA;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class MenyraPagesesController : BaseApiController
    {
        [HttpGet]
        public async Task<IActionResult> GetMenyraPagesave()
        {
            return HandleResult(await Mediator.Send(new List.Query()));
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetMenyraPagesave(Guid id)
        {
            return HandleResult(await Mediator.Send(new Details.Query { MenyraPagesesId = id }));
        }
        [HttpPost]
        public async Task<IActionResult> CreateMenyraPageses(MenyraPageses menyrapageses)
        {
            return HandleResult(await Mediator.Send(new Create.Command { MenyraPageses = menyrapageses }));
        }

          [HttpPut("{id}")]
        public async Task<IActionResult> EditMenyraPageses(Guid id, MenyraPageses menyrapageses)
        {
            menyrapageses.MenyraPagesesId = id;
            return HandleResult(await Mediator.Send(new Edit.Command { MenyraPageses = menyrapageses}));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            return HandleResult(await Mediator.Send(new Delete.Command {MenyraPagesesId = id }));
        }

    }
}