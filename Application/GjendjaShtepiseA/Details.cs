using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Domain;
using MediatR;
using Persistence;

namespace Application.GjendjaShtepiseA
{
    public class Details
    {
        public class Query : IRequest<Result<GjendjaShtepise>>
        {

            public Guid GjendjaId { get; set; }



        }
        public class Handler : IRequestHandler<Query, Result<GjendjaShtepise>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }



            public async Task<Result<GjendjaShtepise>> Handle(Query request, CancellationToken cancellationToken)
            {
                var gjendja = await _context.Gjendjet.FindAsync(request.GjendjaId);

                return Result<GjendjaShtepise>.Success(gjendja);
            }
        }
    }
}