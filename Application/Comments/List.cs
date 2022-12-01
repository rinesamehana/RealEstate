using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Comments
{
    public class List
    {

        public class Query : IRequest<Result<List<CommentsDto>>>
        {
            public Guid ShtepiaId{get;set;}

        }

        public class Handler : IRequestHandler<Query, Result<List<CommentsDto>>>
        {
            private readonly DataContext context;
            private readonly IMapper mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                this.context = context;
                this.mapper = mapper;
            }

            public async Task<Result<List<CommentsDto>>> Handle(Query request, CancellationToken cancellationToken)
            {
                var comments=await this.context.Comments
                .Where(x=>x.Shtepia.ShtepiaId==request.ShtepiaId)
                .OrderByDescending(x=>x.CreatedAt)
                .ProjectTo<CommentsDto>(this.mapper.ConfigurationProvider)
                .ToListAsync();

                return Result<List<CommentsDto>>.Success(comments);
            }
        }
    }
}