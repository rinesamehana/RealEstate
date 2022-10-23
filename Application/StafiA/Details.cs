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

namespace Application.StafiA
{
    public class Details
    {
        public class Query : IRequest<Result<StafiDto>>
        {

            public Guid StafiId { get; set; }



        }
        public class Handler : IRequestHandler<Query, Result<StafiDto>>
        {
            private readonly DataContext _context;
        private readonly IMapper _mapper;

            public Handler(DataContext context, IMapper mapper )
            {
            _mapper = mapper;
                _context = context;
            }



            public async Task<Result<StafiDto>> Handle(Query request, CancellationToken cancellationToken)
            {
                var stafi = await _context.Stafii
                .ProjectTo<StafiDto>(_mapper.ConfigurationProvider)
                .FirstOrDefaultAsync( x=> x.StafiId ==request.StafiId);

                return Result<StafiDto>.Success(stafi);
            }
        }
    }
}
