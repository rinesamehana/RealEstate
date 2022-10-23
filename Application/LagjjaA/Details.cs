using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Domain;
using MediatR;
using Persistence;

namespace Application.LagjjaA
{
    public class Details
    {
        public class Query : IRequest<Result<Lagjja>>
        {

            public Guid LagjjaId { get; set; }



        }
        public class Handler : IRequestHandler<Query, Result<Lagjja>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }



            public async Task<Result<Lagjja>> Handle(Query request, CancellationToken cancellationToken)
            {
                var lagjja = await _context.Lagjet.FindAsync(request.LagjjaId);

                return Result<Lagjja>.Success(lagjja);
            }
        }
    }
}