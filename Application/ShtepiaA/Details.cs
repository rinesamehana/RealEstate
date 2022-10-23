using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Domain;
using MediatR;
using Persistence;
using AutoMapper.QueryableExtensions;
using Microsoft.EntityFrameworkCore;
using AutoMapper;



namespace Application.ShtepiaA
{
    public class Details
    {
        public class Query : IRequest<Result<ShtepiaDto>>
        {

            public Guid ShtepiaId { get; set; }



        }
        public class Handler : IRequestHandler<Query, Result<ShtepiaDto>>
        {
            private readonly DataContext _context;
        private readonly IMapper _mapper;

            public Handler(DataContext context, IMapper mapper)
            {
            _mapper = mapper;
                _context = context;
            }



            public async Task<Result<ShtepiaDto>> Handle(Query request, CancellationToken cancellationToken)
            {
                var shtepia = await _context.Shtepiat
                .ProjectTo<ShtepiaDto>(_mapper.ConfigurationProvider)
                .FirstOrDefaultAsync(x=>x.ShtepiaId==request.ShtepiaId);

                return Result<ShtepiaDto>.Success(shtepia);
            }
        }
    }
}