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

namespace Application.StafiA
{
    public class Edit
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Stafi Stafi { get; set; }
        }
        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.Stafi).SetValidator(new StafiValidator());
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
                var stafi = await _context.Stafii.FindAsync(request.Stafi.StafiId);
                if (stafi == null)
                    return null;
                _mapper.Map(request.Stafi, stafi);
                var result = await _context.SaveChangesAsync() > 0;

                if (!result) return Result<Unit>.Failure("Failure to update Staf");
                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}