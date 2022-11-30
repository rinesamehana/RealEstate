using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using AutoMapper;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.QytetiA
{
    public class List
    {
        public class Query : IRequest<Result<List<QytetiDto>>>{}
        
            public class Handler : IRequestHandler<Query, Result<List<QytetiDto>>>
            {
                private readonly DataContext _context;
            private readonly IMapper _mapper;

            public Handler(DataContext context,IMapper mapper)
                {
                    _context = context;
               _mapper = mapper;
            }

                public async Task<Result<List<QytetiDto>>> Handle(Query request, CancellationToken cancellationToken)
            {
                var qyteti = await _context.Qytetet.ToListAsync();

                var qytetiR = _mapper.Map<List<QytetiDto>>(qyteti);

                return Result<List<QytetiDto>>.Success(qytetiR);
            }
            }

        }
        public class Handler
        {
        }

    }
