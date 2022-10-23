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

namespace Application.LlojiShtepiseA
{
    public class Edit
    {
        public class Command : IRequest<Result<Unit>>
        {
            public LlojiShtepise LlojiShtepise { get; set; }
        }
        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.LlojiShtepise).SetValidator(new LlojiShtepiseValidator());
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
                var llojishtepise = await _context.LlojiShtepive.FindAsync(request.LlojiShtepise.LlojiShtepiseId);
                if (llojishtepise == null)
                    return null;
                _mapper.Map(request.LlojiShtepise, llojishtepise);
                var result = await _context.SaveChangesAsync() > 0;

                if (!result) return Result<Unit>.Failure("Failure to update lloj shtepie");
                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}