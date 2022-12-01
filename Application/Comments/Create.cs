using System;
using System.Net;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Application.Interfaces;
using AutoMapper;
using Domain;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Comments
{
    public class Create
    {
        public class Command : IRequest<Result<CommentsDto>>
        {
            public string Body { get; set; }
            public Guid ShtepiaId { get; set; }
            public string Username { get; set; }
        }

        public class CommandValidator: AbstractValidator<Command>
        {
           

            public CommandValidator(){

                RuleFor(x=>x.Body).NotEmpty();
            }
          
        }
        public class Handler : IRequestHandler<Command, Result<CommentsDto>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            private readonly IUserAccessor _userAccessor;

            public Handler(DataContext context, IMapper mapper, IUserAccessor userAccessor)
            {
                _context = context;
                _mapper = mapper;
                _userAccessor = userAccessor;
            }

            public async Task<Result<CommentsDto>> Handle(Command request, CancellationToken cancellationToken)
            {
                   var shtepia = await _context.Shtepiat.FindAsync(request.ShtepiaId);

            if (shtepia == null)
              return null;

            var user = await _context.Users.Include(p=>p.Photos).SingleOrDefaultAsync(x => x.UserName == _userAccessor.GetUsername());

            var comment = new Comment
            {
                Author = user,
                Shtepia = shtepia,
                Body = request.Body,
                // CreatedAt = DateTime.Now
            };

            shtepia.Comments.Add(comment);

            var success = await _context.SaveChangesAsync() > 0;

            if (success) return Result<CommentsDto>.Success(_mapper.Map<CommentsDto>(comment));

            return Result<CommentsDto>.Failure("Failed to add comment");
            }
        }

    }
    }
