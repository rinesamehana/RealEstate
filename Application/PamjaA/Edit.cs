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

namespace Application.PamjaA
{
    public class Edit
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Pamja Pamja { get; set; }
        }
        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.Pamja).SetValidator(new PamjaValidator());
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
                var pamja = await _context.Pamjet.FindAsync(request.Pamja.PamjaId);
                if (pamja == null)
                    return null;
                _mapper.Map(request.Pamja, pamja);
                var result = await _context.SaveChangesAsync() > 0;

                if (!result) return Result<Unit>.Failure("Failure to update pamje");
                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}