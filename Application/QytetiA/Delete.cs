using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using MediatR;
using Persistence;

namespace Application.QytetiA
{
    public class Delete
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Guid QytetiId { get; set; }
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
                var qyteti = await _context.Qytetet.FindAsync(request.QytetiId);

          
                _context.Remove(qyteti);

                var result = await _context.SaveChangesAsync() > 0;

                if (!result) return Result<Unit>.Failure("Failure to delete qytet");
                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}