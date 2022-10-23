using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.RezervimA
{
    public class Details
    {
        public class Query : IRequest<Result<RezervimiDto>>
        {

            public Guid RezervimiId { get; set; }



        }
        public class Handler : IRequestHandler<Query, Result<RezervimiDto>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
            }



            public async Task<Result<RezervimiDto>> Handle(Query request, CancellationToken cancellationToken)
            {
                var rezervimi = await _context.Rezervimi
                .ProjectTo<RezervimiDto>(_mapper.ConfigurationProvider)
                .FirstOrDefaultAsync(x => x.RezervimiId == request.RezervimiId);

                return Result<RezervimiDto>.Success(rezervimi);
            }
        }
    }
}