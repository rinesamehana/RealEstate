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

namespace Application.LlojiShtepiseA
{
    public class List
    {
        public class Query : IRequest<Result<List<LlojiShtepise>>>{}
        
            public class Handler : IRequestHandler<Query, Result<List<LlojiShtepise>>>
            {
                private readonly DataContext _context;

                public Handler(DataContext context)
                {
                    _context = context;
                }

                public async Task<Result<List<LlojiShtepise>>> Handle(Query request, CancellationToken cancellationToken)
                {
                    return Result<List<LlojiShtepise>>.Success(await _context.LlojiShtepive.ToListAsync());
                }
            }

        }
        public class Handler
        {
        }

    }
