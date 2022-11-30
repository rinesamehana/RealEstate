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

namespace Application.QytetiA
{
    public class Edit
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Qyteti Qyteti { get; set; }
        }
        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.Qyteti).SetValidator(new QytetiValidator());
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
                var qyteti = await _context.Qytetet.FindAsync(request.Qyteti.QytetiId);
                if (qyteti == null)
                    return null;
                qyteti.Emri = request.Qyteti.Emri;
                 qyteti.Photo = request.Qyteti.Photo;
                  qyteti.KodiPostar = request.Qyteti.KodiPostar;
                qyteti.ShtetiId = request.Qyteti.ShtetiId;
                var result = await _context.SaveChangesAsync() > 0;

                if (!result) return Result<Unit>.Failure("Failure to update Qytet");
                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}