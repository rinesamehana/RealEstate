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

namespace Application.GjiniaA
{
    public class EditGjini
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Gjinia Gjinia { get; set; }
        }
        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.Gjinia).SetValidator(new GjiniaValidator());
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
                var gjinia = await _context.Gjinite.FindAsync(request.Gjinia.GjiniaId);
                if (gjinia == null)
                    return null;
                _mapper.Map(request.Gjinia, gjinia);
                var result = await _context.SaveChangesAsync() > 0;

                if (!result) return Result<Unit>.Failure("Failure to update gender");
                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}