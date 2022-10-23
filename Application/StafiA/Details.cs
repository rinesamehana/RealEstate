using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.StafiA
{
    public class Details
    {
        public class Query : IRequest<Result<Stafi>>
        {

            public Guid StafiId { get; set; }



        }
        public class Handler : IRequestHandler<Query, Result<Stafi>>
        {
            private readonly DataContext _context;
      

            public Handler(DataContext context )
            {
            
                _context = context;
            }



            public async Task<Result<Stafi>> Handle(Query request, CancellationToken cancellationToken)
            {
                var stafi = await _context.Stafii.FindAsync(request.StafiId);
                

                return Result<Stafi>.Success(stafi);
            }
        }
    }
}
