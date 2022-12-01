using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.RezervimA
{
    public class List
    {
        public class Query : IRequest<Result<List<RezervimiDto>>> { }

        public class Handler : IRequestHandler<Query, Result<List<RezervimiDto>>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
            }

            public async Task<Result<List<RezervimiDto>>> Handle(Query request, CancellationToken cancellationToken)
            {
                var rezervimi = await _context.Rezervimet
              
                .ProjectTo<RezervimiDto>(_mapper.ConfigurationProvider)
                .ToListAsync(cancellationToken);


                // var rezervimetToReturn=_mapper.Map<List<RezervimiDto>>(rezervimi);

                return Result<List<RezervimiDto>>.Success(rezervimi);
            }
        }

    }

}


