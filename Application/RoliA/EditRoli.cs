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

namespace Application.RoliA
{
    public class EditRoli
    {
        public class Command : IRequest<Result<Unit>>
        {
            public RoliUser RoliUser { get; set; }
        }
        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.RoliUser).SetValidator(new RoliValidator());
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
                var roli = await _context.Rolet.FindAsync(request.RoliUser.RoliId);
                if (roli == null)
                    return null;
                _mapper.Map(request.RoliUser, roli);
                var result = await _context.SaveChangesAsync() > 0;

                if (!result) return Result<Unit>.Failure("Failure to update rol");
                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}