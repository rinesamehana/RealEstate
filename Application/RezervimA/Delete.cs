using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using MediatR;
using Persistence;

namespace Application.RezervimA
{
    public class Delete
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Guid RezervimiId { get; set; }
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
                var rezervimi = await _context.Rezervimi.FindAsync(request.RezervimiId);

          
                _context.Remove(rezervimi);

                var result = await _context.SaveChangesAsync() > 0;

                if (!result) return Result<Unit>.Failure("Failure to delete Rezervim");
                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}