using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Domain;
using MediatR;
using Persistence;

namespace Application.MenyraPagesesA
{
    public class Details
    {
        public class Query : IRequest<Result<MenyraPageses>>
        {

            public Guid MenyraPagesesId { get; set; }



        }
        public class Handler : IRequestHandler<Query, Result<MenyraPageses>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }



            public async Task<Result<MenyraPageses>> Handle(Query request, CancellationToken cancellationToken)
            {
                var menyrapageses = await _context.MenyraPagesave.FindAsync(request.MenyraPagesesId);

                return Result<MenyraPageses>.Success(menyrapageses);
            }
        }
    }
}