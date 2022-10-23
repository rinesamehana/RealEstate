using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Domain;
using MediatR;
using Persistence;

namespace Application.KontrataA
{
    public class Details
    {
        public class Query : IRequest<Result<Kontrata>>
        {

            public Guid KontrataId { get; set; }



        }
        public class Handler : IRequestHandler<Query, Result<Kontrata>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }



            public async Task<Result<Kontrata>> Handle(Query request, CancellationToken cancellationToken)
            {
                var kontrata = await _context.Kontratat.FindAsync(request.KontrataId);

                return Result<Kontrata>.Success(kontrata);
            }
        }
    }
}