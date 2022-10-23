using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Domain;
using MediatR;
using Persistence;

namespace Application.AmbientiA
{
    public class Details
    {
        public class Query : IRequest<Result<Ambienti>>
        {

            public Guid AmbientiId { get; set; }



        }
        public class Handler : IRequestHandler<Query, Result<Ambienti>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }



            public async Task<Result<Ambienti>> Handle(Query request, CancellationToken cancellationToken)
            {
                var ambienti = await _context.Ambientet.FindAsync(request.AmbientiId);

                return Result<Ambienti>.Success(ambienti);
            }
        }
    }
}