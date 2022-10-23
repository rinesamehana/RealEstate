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

namespace Application.StafiA
{
    public class Create
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
        private readonly IUserAccessor _userAccessor;

            public Handler(DataContext context , IUserAccessor userAccessor)
            {
            _userAccessor = userAccessor;
                
                _context = context;
            }

            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {

                var user=await _context.Users.FirstOrDefaultAsync(x=>x.UserName == _userAccessor.GetUsername());

                var stafi = new StafiShtepia
                {
                      Stafi = request.Stafi,

                };
                

                request.Stafi.Shtepitee.Add(stafi);
                
                _context.Stafii.Add(request.Stafi);

                var result = await _context.SaveChangesAsync() > 0;

                if (!result) return Result<Unit>.Failure("Failed to create Staf");

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}