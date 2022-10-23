using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Domain;
using MediatR;
using Persistence;

namespace Application.QytetiA
{
    public class Details
    {
        public class Query : IRequest<Result<Qyteti>>
        {

            public Guid QytetiId { get; set; }



        }
        public class Handler : IRequestHandler<Query, Result<Qyteti>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }



            public async Task<Result<Qyteti>> Handle(Query request, CancellationToken cancellationToken)
            {
                var qyteti = await _context.Qytetet.FindAsync(request.QytetiId);

                return Result<Qyteti>.Success(qyteti);
            }
        }
    }
}