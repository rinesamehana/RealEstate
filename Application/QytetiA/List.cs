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

namespace Application.QytetiA
{
    public class List
    {
        public class Query : IRequest<Result<List<Qyteti>>>{}
        
            public class Handler : IRequestHandler<Query, Result<List<Qyteti>>>
            {
                private readonly DataContext _context;

                public Handler(DataContext context)
                {
                    _context = context;
                }

                public async Task<Result<List<Qyteti>>> Handle(Query request, CancellationToken cancellationToken)
                {
                    return Result<List<Qyteti>>.Success(await _context.Qytetet.ToListAsync());
                }
            }

        }
        public class Handler
        {
        }

    }
