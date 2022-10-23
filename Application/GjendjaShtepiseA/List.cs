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

namespace Application.GjendjaShtepiseA
{
    public class List
    {
        public class Query : IRequest<Result<List<GjendjaShtepise>>>{}
        
            public class Handler : IRequestHandler<Query, Result<List<GjendjaShtepise>>>
            {
                private readonly DataContext _context;

                public Handler(DataContext context)
                {
                    _context = context;
                }

                public async Task<Result<List<GjendjaShtepise>>> Handle(Query request, CancellationToken cancellationToken)
                {
                    return Result<List<GjendjaShtepise>>.Success(await _context.Gjendjet.ToListAsync());
                }
            }

        }
        public class Handler
        {
        }

    }
