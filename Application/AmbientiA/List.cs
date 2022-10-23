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

namespace Application.AmbientiA
{
    public class List
    {
        public class Query : IRequest<Result<List<Ambienti>>>{}
        
            public class Handler : IRequestHandler<Query, Result<List<Ambienti>>>
            {
                private readonly DataContext _context;

                public Handler(DataContext context)
                {
                    _context = context;
                }

                public async Task<Result<List<Ambienti>>> Handle(Query request, CancellationToken cancellationToken)
                {
                    return Result<List<Ambienti>>.Success(await _context.Ambientet.ToListAsync());
                }
            }

        }
        public class Handler
        {
        }

    }


