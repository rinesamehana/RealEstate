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

namespace Application.RoliA
{
    public class List
    {
        public class Query : IRequest<Result<List<RoliUser>>>{}
        
            public class Handler : IRequestHandler<Query, Result<List<RoliUser>>>
            {
                private readonly DataContext _context;

                public Handler(DataContext context)
                {
                    _context = context;
                }

                public async Task<Result<List<RoliUser>>> Handle(Query request, CancellationToken cancellationToken)
                {
                    return Result<List<RoliUser>>.Success(await _context.Rolet.ToListAsync());
                }
            }

        }
        public class Handler
        {
        }

    }
