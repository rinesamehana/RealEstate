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

namespace Application.ShtepiaA
{
    public class List
    {
        public class Query : IRequest<Result<List<Shtepia>>>{}
        
            public class Handler : IRequestHandler<Query, Result<List<Shtepia>>>
            {
                private readonly DataContext _context;

                public Handler(DataContext context)
                {
                    _context = context;
                }

                public async Task<Result<List<Shtepia>>> Handle(Query request, CancellationToken cancellationToken)
                {
                    return Result<List<Shtepia>>.Success(await _context.Shtepiat.ToListAsync());
                }
            }

        }
        public class Handler
        {
        }

    }


