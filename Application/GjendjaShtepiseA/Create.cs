using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;
using FluentValidation.AspNetCore;
using FluentValidation;
using Application.Core;

namespace Application.GjendjaShtepiseA
{
    public class Create
    {
        public class Command : IRequest<Result<Unit>>
        {
            public GjendjaShtepise GjendjaShtepise { get; set; }
        }
        public class CommandValidator : AbstractValidator<Command>
        {
           public CommandValidator()
            {
                RuleFor(x => x.GjendjaShtepise).SetValidator(new GjendjaShtepiseValidator());
            }
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
                _context.Gjendjet.Add(request.GjendjaShtepise);

                var result = await _context.SaveChangesAsync() > 0;

                if (!result) return Result<Unit>.Failure("Failed to create GjendjeShtepie");

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}