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

namespace Application.GjiniaA
{
    public class List
    {
        public class Query : IRequest<Result<List<Gjinia>>>{}
        
            public class Handler : IRequestHandler<Query, Result<List<Gjinia>>>
            {
                private readonly DataContext _context;

                public Handler(DataContext context)
                {
                    _context = context;
                }

                public async Task<Result<List<Gjinia>>> Handle(Query request, CancellationToken cancellationToken)
                {
                    return Result<List<Gjinia>>.Success(await _context.Gjinite.ToListAsync());
                }
            }

        }
        public class Handler
        {
        }

    }


