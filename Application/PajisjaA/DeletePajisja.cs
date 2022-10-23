using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using MediatR;
using Persistence;

namespace Application.PajisjaA
{
    public class DeletePajisja
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Guid PajisjaId { get; set; }
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
                var pajisja = await _context.Pajisjet.FindAsync(request.PajisjaId);

          
                _context.Remove(pajisja);

                var result = await _context.SaveChangesAsync() > 0;

                if (!result) return Result<Unit>.Failure("Failure to delete pasjije");
                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}