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

namespace Application.PajisjaA
{
    public class List
    {
        public class Query : IRequest<Result<List<Pajisja>>>{}
        
            public class Handler : IRequestHandler<Query, Result<List<Pajisja>>>
            {
                private readonly DataContext _context;

                public Handler(DataContext context)
                {
                    _context = context;
                }

                public async Task<Result<List<Pajisja>>> Handle(Query request, CancellationToken cancellationToken)
                {
                    return Result<List<Pajisja>>.Success(await _context.Pajisjet.ToListAsync());
                }
            }

        }
        public class Handler
        {
        }

    }
