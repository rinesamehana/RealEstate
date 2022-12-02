using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Application.Interfaces;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.ShtepiaA
{
    public class List
    {
        public class Query : IRequest<Result<PageList<ShtepiaDto>>>
        {
            public PagingParams Params { get; set; }
        }
        
            public class Handler : IRequestHandler<Query, Result<PageList<ShtepiaDto>>>
            {
                private readonly DataContext _context;

                private readonly IMapper _mapper;
                 
                private readonly IUserAccessor _userAccessor;

                public Handler(DataContext context, IMapper mapper, IUserAccessor userAccessor)
                {
                     _userAccessor = userAccessor;

                     _mapper = mapper;

                    _context = context;
                }

                public async Task<Result<PageList<ShtepiaDto>>> Handle(Query request, CancellationToken cancellationToken)
                {
                var query = _context.Shtepiat
                .OrderBy(d => d.Cmimi)
                .ProjectTo<ShtepiaDto>(_mapper.ConfigurationProvider,
                   new {currentUsername = _userAccessor.GetUsername()})
                   .AsQueryable();

                    return Result<PageList<ShtepiaDto>>.Success(
                        await PageList<ShtepiaDto>.CreateAsync(query, request.Params.PageNumber,
                         request.Params.PageSize)
                         );
                }
            }

        }
        // public class Handler
        // {
        // }

    }


