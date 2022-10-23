using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Domain;
using MediatR;
using Persistence;

namespace Application.PamjaA
{
    public class Details
    {
        public class Query : IRequest<Result<Pamja>>
        {

            public Guid PamjaId { get; set; }



        }
        public class Handler : IRequestHandler<Query, Result<Pamja>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }



            public async Task<Result<Pamja>> Handle(Query request, CancellationToken cancellationToken)
            {
                var pamja = await _context.Pamjet.FindAsync(request.PamjaId);

                return Result<Pamja>.Success(pamja);
            }
        }
    }
}