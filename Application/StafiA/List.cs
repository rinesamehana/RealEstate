using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;
using AutoMapper;
using AutoMapper.QueryableExtensions;

namespace Application.StafiA
{
    public class List
    {
        public class Query : IRequest<Result<List<StafiDto>>>{}
        
            public class Handler : IRequestHandler<Query, Result<List<StafiDto>>>
            {
                private readonly DataContext _context;
        private readonly IMapper _mapper;

                public Handler(DataContext context , IMapper mapper)
                {
            _mapper = mapper;
                    _context = context;
                }

                public async Task<Result<List<StafiDto>>> Handle(Query request, CancellationToken cancellationToken)
                {

                    var stafet = await _context.Stafii
                     .ProjectTo<StafiDto>(_mapper.ConfigurationProvider)
                     .ToListAsync(cancellationToken);

                  

                    return Result<List<StafiDto>>.Success(stafet);
                }
            }

        }
        public class Handler
        {
        }

    }
