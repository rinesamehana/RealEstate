using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;
using FluentValidation.AspNetCore;
using FluentValidation;
using Application.Core;
using Microsoft.EntityFrameworkCore;
using Application.Interfaces;
using System.Text;


namespace Application.ShtepiaA
{
    public class Create
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Shtepia Shtepia { get; set; }
        }

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.Shtepia).SetValidator(new ShtepiaValidator());
            }
        }
        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
            private readonly DataContext _context;
               private readonly IUserAccessor _userAccessor;
       

            public Handler(DataContext context, IUserAccessor userAccessor)
            {
                _userAccessor=userAccessor;
                _context = context;
            }

            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var user=await _context.Users.FirstOrDefaultAsync(x=>x.UserName == _userAccessor.GetUsername());

                // var attendee=new Rezervimi
                // {
                //     AppUser=user,
                //     Shtepia=request.Shtepia,
                //     Emri="",
                //     Mbiemri="",
                //     NrTelefonit="",
                //     email="",
                //     IsHost= true,
                //     Check_in=new DateTime(),
                //     Check_out=new DateTime(),
                //     MenyraPageses=new MenyraPageses(),
                //     Kontrata=new Kontrata(),
                // };

                // request.Shtepia.Attendees.Add(attendee);
                
                _context.Shtepiat.Add(request.Shtepia);

                var result = await _context.SaveChangesAsync() > 0;

                if (!result) return Result<Unit>.Failure("Failed to create Shtepi");

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}