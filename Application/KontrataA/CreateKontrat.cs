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

namespace Application.KontrataA
{
    public class CreateKontrat
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Kontrata Kontrata { get; set; }
        }

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.Kontrata).SetValidator(new KontrataValidator());
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
                _context.Kontratat.Add(request.Kontrata);

                var result = await _context.SaveChangesAsync() > 0;

                if (!result) return Result<Unit>.Failure("Failed to create Kontrat");

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}