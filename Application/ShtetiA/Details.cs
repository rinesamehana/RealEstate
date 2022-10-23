using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Domain;
using MediatR;
using Persistence;

namespace Application.ShtetiA
{
    public class Details
    {
        public class Query : IRequest<Result<Shteti>>
        {

            public Guid ShtetiId { get; set; }



        }
        public class Handler : IRequestHandler<Query, Result<Shteti>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }



            public async Task<Result<Shteti>> Handle(Query request, CancellationToken cancellationToken)
            {
                var shteti = await _context.Shtetet.FindAsync(request.ShtetiId);

                return Result<Shteti>.Success(shteti);
            }
        }
    }
}
