using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Domain;
using MediatR;
using Persistence;

namespace Application.RoliA
{
    public class Details
    {
        public class Query : IRequest<Result<RoliUser>>
        {

            public Guid RoliId { get; set; }



        }
        public class Handler : IRequestHandler<Query, Result<RoliUser>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }



            public async Task<Result<RoliUser>> Handle(Query request, CancellationToken cancellationToken)
            {
                var rolet = await _context.Rolet.FindAsync(request.RoliId);

                return Result<RoliUser>.Success(rolet);
            }
        }
    }
}