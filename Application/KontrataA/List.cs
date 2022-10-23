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

namespace Application.KontrataA
{
    public class List
    {
        public class Query : IRequest<Result<List<Kontrata>>>{}
        
            public class Handler : IRequestHandler<Query, Result<List<Kontrata>>>
            {
                private readonly DataContext _context;

                public Handler(DataContext context)
                {
                    _context = context;
                }

                public async Task<Result<List<Kontrata>>> Handle(Query request, CancellationToken cancellationToken)
                {
                    return Result<List<Kontrata>>.Success(await _context.Kontratat.ToListAsync());
                }
            }

        }
        public class Handler
        {
        }

    }
