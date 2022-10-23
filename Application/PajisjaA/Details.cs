using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Domain;
using MediatR;
using Persistence;

namespace Application.PajisjaA
{
    public class Details
    {
        public class Query : IRequest<Result<Pajisja>>
        {

            public Guid PajisjaId { get; set; }



        }
        public class Handler : IRequestHandler<Query, Result<Pajisja>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }



            public async Task<Result<Pajisja>> Handle(Query request, CancellationToken cancellationToken)
            {
                var pajisja = await _context.Pajisjet.FindAsync(request.PajisjaId);

                return Result<Pajisja>.Success(pajisja);
            }
        }
    }
}