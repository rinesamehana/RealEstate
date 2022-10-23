using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using AutoMapper;
using Domain;
using FluentValidation;
using MediatR;
using Persistence;

namespace Application.KontrataA
{
    public class EditKontrat
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Kontrata Kontrata{ get; set; }
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
            private readonly IMapper _mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var kontrata = await _context.Kontratat.FindAsync(request.Kontrata.KontrataId);
                if (kontrata == null)
                    return null;
                _mapper.Map(request.Kontrata, kontrata);
                var result = await _context.SaveChangesAsync() > 0;

                if (!result) return Result<Unit>.Failure("Failure to update kontrate");
                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}