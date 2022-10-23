using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Domain;
using MediatR;
using Persistence;

namespace Application.KohaEPunesA
{
    public class Details
    {
        public class Query : IRequest<Result<KohaEPunes>>
        {

            public Guid KohaId { get; set; }



        }
        public class Handler : IRequestHandler<Query, Result<KohaEPunes>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }



            public async Task<Result<KohaEPunes>> Handle(Query request, CancellationToken cancellationToken)
            {
                var kohaEPunes = await _context.Kohaa.FindAsync(request.KohaId);

                return Result<KohaEPunes>.Success(kohaEPunes);
            }
        }
    }
}