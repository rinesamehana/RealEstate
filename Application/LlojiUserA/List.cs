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

namespace Application.LlojiUserA
{
    public class List
    {
        public class Query : IRequest<Result<List<LlojiUser>>>{}
        
            public class Handler : IRequestHandler<Query, Result<List<LlojiUser>>>
            {
                private readonly DataContext _context;

                public Handler(DataContext context)
                {
                    _context = context;
                }

                public async Task<Result<List<LlojiUser>>> Handle(Query request, CancellationToken cancellationToken)
                {
                    return Result<List<LlojiUser>>.Success(await _context.LlojeteUserit.ToListAsync());
                }
            }

        }
        public class Handler
        {
        }

    }
