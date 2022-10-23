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

namespace Application.LagjjaA
{
    public class EditLagje
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Lagjja Lagjja { get; set; }
        }
        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.Lagjja).SetValidator(new LagjjaValidator());
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
                var lagjja = await _context.Lagjet.FindAsync(request.Lagjja.LagjjaId);
                if (lagjja == null)
                    return null;
                _mapper.Map(request.Lagjja, lagjja);
                var result = await _context.SaveChangesAsync() > 0;

                if (!result) return Result<Unit>.Failure("Failure to update lagjja");
                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}