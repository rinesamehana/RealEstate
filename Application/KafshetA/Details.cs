using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Domain;
using MediatR;
using Persistence;

namespace Application.KafshetA
{
    public class Details
    {
        public class Query : IRequest<Result<Kafshet>>
        {

            public Guid KafshetId { get; set; }



        }
        public class Handler : IRequestHandler<Query, Result<Kafshet>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }



            public async Task<Result<Kafshet>> Handle(Query request, CancellationToken cancellationToken)
            {
                var kafshet = await _context.Kafsha.FindAsync(request.KafshetId);

                return Result<Kafshet>.Success(kafshet);
            }
        }
    }
}