using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using MediatR;
using Persistence;

namespace Application.LlojiUserA
{
    public class Delete
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Guid LlojiUserId { get; set; }
        }
        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var llojiuser = await _context.LlojeteUserit.FindAsync(request.LlojiUserId);

          
                _context.Remove(llojiuser);

                var result = await _context.SaveChangesAsync() > 0;

                if (!result) return Result<Unit>.Failure("Failure to delete llojuseri");
                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}