using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Domain;
using MediatR;
using Persistence;

namespace Application.ShtepiaA
{
    public class Details
    {
        public class Query : IRequest<Result<Shtepia>>
        {

            public Guid ShtepiaId { get; set; }



        }
        public class Handler : IRequestHandler<Query, Result<Shtepia>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }



            public async Task<Result<Shtepia>> Handle(Query request, CancellationToken cancellationToken)
            {
                var shtepia = await _context.Shtepiat.FindAsync(request.ShtepiaId);

                return Result<Shtepia>.Success(shtepia);
            }
        }
    }
}