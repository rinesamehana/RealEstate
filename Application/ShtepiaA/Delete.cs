using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using MediatR;
using Persistence;

namespace Application.ShtepiaA
{
    public class Delete
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Guid ShtepiaId { get; set; }
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
                var shtepia = await _context.Shtepiat.FindAsync(request.ShtepiaId);

          
                _context.Remove(shtepia);

                var result = await _context.SaveChangesAsync() > 0;

                if (!result) return Result<Unit>.Failure("Failure to delete shtepi");
                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}