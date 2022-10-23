using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Domain;
using MediatR;
using Persistence;

namespace Application.LlojiUserA
{
    public class Details
    {
        public class Query : IRequest<Result<LlojiUser>>
        {

            public Guid LlojiUserId { get; set; }



        }
        public class Handler : IRequestHandler<Query, Result<LlojiUser>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }



            public async Task<Result<LlojiUser>> Handle(Query request, CancellationToken cancellationToken)
            {
                var llojiuser = await _context.LlojeteUserit.FindAsync(request.LlojiUserId);

                return Result<LlojiUser>.Success(llojiuser);
            }
        }
    }
}