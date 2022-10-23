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

namespace Application.PajisjaA
{
    public class EditPajisja
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Pajisja Pajisja { get; set; }
        }
        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.Pajisja).SetValidator(new PajisjaValidator());
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
                var pajisja = await _context.Pajisjet.FindAsync(request.Pajisja.PajisjaId);
                if (pajisja == null)
                    return null;
                _mapper.Map(request.Pajisja, pajisja);
                var result = await _context.SaveChangesAsync() > 0;

                if (!result) return Result<Unit>.Failure("Failure to update pajisje");
                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}