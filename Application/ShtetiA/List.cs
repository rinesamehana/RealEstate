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

namespace Application.ShtetiA
{
    public class List
    {
        public class Query : IRequest<Result<List<Shteti>>>{}
        
            public class Handler : IRequestHandler<Query, Result<List<Shteti>>>
            {
                private readonly DataContext _context;

                public Handler(DataContext context)
                {
                    _context = context;
                }

                public async Task<Result<List<Shteti>>> Handle(Query request, CancellationToken cancellationToken)
                {
                    return Result<List<Shteti>>.Success(await _context.Shtetet.ToListAsync());
                }
            }

        }
        public class Handler
        {
        }

    }
