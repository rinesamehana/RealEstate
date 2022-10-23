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

namespace Application.KafshetA
{
    public class EditKafshet
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Kafshet Kafshet { get; set; }
        }
        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.Kafshet).SetValidator(new KafshetValidator());
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
                var kafshet = await _context.Kafsha.FindAsync(request.Kafshet.KafshetId);
                if (kafshet == null)
                    return null;
                _mapper.Map(request.Kafshet, kafshet);
                var result = await _context.SaveChangesAsync() > 0;

                if (!result) return Result<Unit>.Failure("Failure to update kafshet");
                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}