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

namespace Application.LagjjaA
{
    public class List
    {
        public class Query : IRequest<Result<List<Lagjja>>>{}
        
            public class Handler : IRequestHandler<Query, Result<List<Lagjja>>>
            {
                private readonly DataContext _context;

                public Handler(DataContext context)
                {
                    _context = context;
                }

                public async Task<Result<List<Lagjja>>> Handle(Query request, CancellationToken cancellationToken)
                {
                    return Result<List<Lagjja>>.Success(await _context.Lagjet.ToListAsync());
                }
            }

        }
        public class Handler
        {
        }

    }


