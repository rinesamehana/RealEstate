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

namespace Application.MenyraPagesesA
{
    public class List
    {
        public class Query : IRequest<Result<List<MenyraPageses>>>{}
        
            public class Handler : IRequestHandler<Query, Result<List<MenyraPageses>>>
            {
                private readonly DataContext _context;

                public Handler(DataContext context)
                {
                    _context = context;
                }

                public async Task<Result<List<MenyraPageses>>> Handle(Query request, CancellationToken cancellationToken)
                {
                    return Result<List<MenyraPageses>>.Success(await _context.MenyraPagesave.ToListAsync());
                }
            }

        }
        public class Handler
        {
        }

    }
