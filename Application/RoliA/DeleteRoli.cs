using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using MediatR;
using Persistence;

namespace Application.RoliA
{
    public class DeleteRoli
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Guid RoliId { get; set; }
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
                var rolet = await _context.Rolet.FindAsync(request.RoliId);

          
                _context.Remove(rolet);

                var result = await _context.SaveChangesAsync() > 0;

                if (!result) return Result<Unit>.Failure("Failure to delete rolet");
                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}