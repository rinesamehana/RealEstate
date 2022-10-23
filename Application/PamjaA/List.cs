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

namespace Application.PamjaA
{
    public class List
    {
        public class Query : IRequest<Result<List<Pamja>>>{}
        
            public class Handler : IRequestHandler<Query, Result<List<Pamja>>>
            {
                private readonly DataContext _context;

                public Handler(DataContext context)
                {
                    _context = context;
                }

                public async Task<Result<List<Pamja>>> Handle(Query request, CancellationToken cancellationToken)
                {
                    return Result<List<Pamja>>.Success(await _context.Pamjet.ToListAsync());
                }
            }

        }
        public class Handler
        {
        }

    }

