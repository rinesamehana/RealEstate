using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.GjiniaA;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class GjiniaController : BaseApiController
    {


        [HttpGet]
        public async Task<IActionResult> GetGjinite()
        {
            return HandleResult(await Mediator.Send(new List.Query()));
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetGjinia(Guid id)
        {


            return HandleResult(await Mediator.Send(new Details.Query { GjiniaId = id }));

        }
         [HttpPost]
        public async Task<IActionResult> Create(Gjinia gjinia)
        {
            return HandleResult(await Mediator.Send(new Create.Command { Gjinia = gjinia }));
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> EditGjini(Guid id, Gjinia gjinia)
        {
            gjinia.GjiniaId = id;
            return HandleResult(await Mediator.Send(new EditGjini.Command { Gjinia = gjinia }));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteGjini(Guid id)
        {
            return HandleResult(await Mediator.Send(new DeleteGjini.Command { GjiniaId = id }));
        }

    }
}