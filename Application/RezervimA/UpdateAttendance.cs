using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Application.Interfaces;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.RezervimA
{
    public class UpdateAttendance
    {
        public class Command : IRequest<Result<Unit>>{
            public Guid Id{get;set;}
            
        }

        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
            private readonly DataContext _context;
            private readonly IUserAccessor _userAccessor;

            public Handler(DataContext context, IUserAccessor userAccessor)
            {
                _context = context;
                _userAccessor = userAccessor;
            }

            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var rezervimi=await _context.Rezervimi
                .Include(a=>a.Attendees).ThenInclude(u=>u.AppUser)
                .SingleOrDefaultAsync(x=>x.RezervimiId==request.Id);
            
                if(rezervimi==null) return null;

                var user=await _context.Users.FirstOrDefaultAsync(x=>
                x.UserName==_userAccessor.GetUsername());

                  if(user==null) return null;

                  var HostUsername=rezervimi.Attendees.FirstOrDefault(x=>x.IsHost)?.AppUser?.UserName;
                var attendace=rezervimi.Attendees.FirstOrDefault(x=>x.AppUser.UserName==user.UserName);

                if(attendace !=null && HostUsername==user.UserName)
                    rezervimi.IsCancelled=!rezervimi.IsCancelled;
                 if(attendace !=null && HostUsername==user.UserName)
                    rezervimi.IsCancelled=!rezervimi.IsCancelled;
                    rezervimi.Attendees.Remove(attendace);

                    if(attendace==null){
                        attendace=new RezervimiAttendee{
                            AppUser=user,
                            Rezervimi=rezervimi,
                            IsHost=false
                        };

                        rezervimi.Attendees.Add(attendace);
                    }

                    var result=await _context.SaveChangesAsync()>0;

                    return result ? Result<Unit>.Success(Unit.Value): Result<Unit>.Failure("Problem updating");
           
            }
        }
    }
}