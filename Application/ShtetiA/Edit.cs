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

namespace Application.ShtetiA
{
    public class Edit
    {
        public class Command : IRequest<Result<Unit>>
        {
            public  Shteti Shteti { get; set; }
        }
        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.Shteti).SetValidator(new ShtetiValidator());
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
                var shteti = await _context.Shtetet.FindAsync(request.Shteti.ShtetiId);
                if (shteti == null)
                    return null;
                _mapper.Map(request.Shteti, shteti);
                var result = await _context.SaveChangesAsync() > 0;

                if (!result) return Result<Unit>.Failure("Failure to update shtet");
                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}