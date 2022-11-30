using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.QytetiA
{
    public class Details
    {
        public class Query : IRequest<Result<QytetiDto>>
        {

            public Guid QytetiId { get; set; }



        }
        public class Handler : IRequestHandler<Query, Result<QytetiDto>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }



         public async Task<Result<QytetiDto>> Handle(Query request, CancellationToken cancellationToken)
            {
                var qyteti = await _context.Qytetet.FindAsync(request.QytetiId);

                var qytetiR = _mapper.Map<QytetiDto>(qyteti);

                return Result<QytetiDto>.Success(qytetiR);
            }

        }
    }
}