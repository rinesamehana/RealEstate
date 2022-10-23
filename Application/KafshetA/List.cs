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

namespace Application.KafshetA
{
    public class List
    {
        public class Query : IRequest<Result<List<Kafshet>>>{}
        
            public class Handler : IRequestHandler<Query, Result<List<Kafshet>>>
            {
                private readonly DataContext _context;

                public Handler(DataContext context)
                {
                    _context = context;
                }

                public async Task<Result<List<Kafshet>>> Handle(Query request, CancellationToken cancellationToken)
                {
                    return Result<List<Kafshet>>.Success(await _context.Kafsha.ToListAsync());
                }
            }

        }
        public class Handler
        {
        }

    }


