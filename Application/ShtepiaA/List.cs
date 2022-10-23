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

namespace Application.ShtepiaA
{
    public class List
    {
        public class Query : IRequest<Result<List<ShtepiaDto>>>{}
        
            public class Handler : IRequestHandler<Query, Result<List<ShtepiaDto>>>
            {
                private readonly DataContext _context;
                private readonly IMapper _mapper;

                public Handler(DataContext context, IMapper mapper)
                {
                    _context = context;
                    _mapper = mapper;
                }

                public async Task<Result<List<ShtepiaDto>>> Handle(Query request, CancellationToken cancellationToken)
                {
                    
                    var shtepite=await _context.Shtepiat
               
                   .ProjectTo<ShtepiaDto>(_mapper.ConfigurationProvider)
                    .ToListAsync(cancellationToken);
                
                    return Result<List<ShtepiaDto>>.Success(shtepite);


                 
                }
            }

        }
        public class Handler
        {
        }

    }


