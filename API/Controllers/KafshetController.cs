using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.KafshetA;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class KafshetController : BaseApiController
    {


        [HttpGet]
        public async Task<IActionResult> GetKafshet()
        {
            return HandleResult(await Mediator.Send(new List.Query()));
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetKafshen(Guid id)
        {


            return HandleResult(await Mediator.Send(new Details.Query { KafshetId = id }));

        }
         [HttpPost]
        public async Task<IActionResult> Create(Kafshet kafshet)
        {
            return HandleResult(await Mediator.Send(new CreateKafshet.Command { Kafshet = kafshet }));
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> EditGjini(Guid id, Kafshet kafshet)
        {
            kafshet.KafshetId = id;
            return HandleResult(await Mediator.Send(new EditKafshet.Command { Kafshet = kafshet }));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteGjini(Guid id)
        {
            return HandleResult(await Mediator.Send(new DeleteKafshet.Command { KafshetId = id }));
        }

    }
}