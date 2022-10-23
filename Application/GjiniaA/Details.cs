using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Domain;
using MediatR;
using Persistence;

namespace Application.GjiniaA
{
    public class Details
    {
        public class Query : IRequest<Result<Gjinia>>
        {

            public Guid GjiniaId { get; set; }



        }
        public class Handler : IRequestHandler<Query, Result<Gjinia>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }



            public async Task<Result<Gjinia>> Handle(Query request, CancellationToken cancellationToken)
            {
                var gjinia = await _context.Gjinite.FindAsync(request.GjiniaId);

                return Result<Gjinia>.Success(gjinia);
            }
        }
    }
}