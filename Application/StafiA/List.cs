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
using AutoMapper;
using AutoMapper.QueryableExtensions;

namespace Application.StafiA
{
    public class List
    {
        public class Query : IRequest<Result<List<Stafi>>>{}
        
            public class Handler : IRequestHandler<Query, Result<List<Stafi>>>
            {
                private readonly DataContext _context;
       

                public Handler(DataContext context )
                {
           
                    _context = context;
                }

                public async Task<Result<List<Stafi>>> Handle(Query request, CancellationToken cancellationToken)
                {

                   return Result<List<Stafi>>.Success(await _context.Stafii.ToListAsync());
                }
            }

        }
        public class Handler
        {
        }

    }
