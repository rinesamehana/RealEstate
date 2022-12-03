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

namespace Application.RezervimA
{
    public class Edit
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Rezervimi Rezervimi { get; set; }
        }
        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.Rezervimi).SetValidator(new RezervimiValidator());
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
                var rezervimi = await _context.Rezervimet.FindAsync(request.Rezervimi.RezervimiId);
                if (rezervimi == null)
                    return null;

                rezervimi.RezervimiId = request.Rezervimi.RezervimiId;
                rezervimi.Check_in = request.Rezervimi.Check_in;
                rezervimi.Check_out = request.Rezervimi.Check_out;
                rezervimi.nrPersonave = request.Rezervimi.nrPersonave;
                rezervimi.Pagesa = request.Rezervimi.Pagesa;
                rezervimi.AppUserId = rezervimi.AppUserId;
                rezervimi.Shtepia.Titulli=rezervimi.Shtepia.Titulli;

                // _mapper.Map(request.Rezervimi, rezervimi);
                var result = await _context.SaveChangesAsync() > 0;

                if (!result) return Result<Unit>.Failure("Failure to update rezervimi");
                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}