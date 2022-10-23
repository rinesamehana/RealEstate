using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Domain;
using MediatR;
using Persistence;

namespace Application.LlojiShtepiseA
{
    public class Details
    {
        public class Query : IRequest<Result<LlojiShtepise>>
        {

            public Guid LlojiShtepiseId { get; set; }



        }
        public class Handler : IRequestHandler<Query, Result<LlojiShtepise>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }



            public async Task<Result<LlojiShtepise>> Handle(Query request, CancellationToken cancellationToken)
            {
                var llojishtepise = await _context.LlojiShtepive.FindAsync(request.LlojiShtepiseId);

                return Result<LlojiShtepise>.Success(llojishtepise);
            }
        }
    }
}