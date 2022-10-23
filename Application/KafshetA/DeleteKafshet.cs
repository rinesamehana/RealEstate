using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using MediatR;
using Persistence;

namespace Application.KafshetA
{
    public class DeleteKafshet
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Guid KafshetId { get; set; }
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
                var kafshet = await _context.Kafsha.FindAsync(request.KafshetId);

          
                _context.Remove(kafshet);

                var result = await _context.SaveChangesAsync() > 0;

                if (!result) return Result<Unit>.Failure("Failure to delete kafshet");
                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}