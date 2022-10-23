// using System;
// using System.Collections.Generic;
// using System.Linq;
// using System.Threading.Tasks;
// using Domain;
// using MediatR;
// using Application.Core;
// using Microsoft.AspNetCore.Http;
// using System.Threading;
// using Persistence;

// namespace Application.Photos
// {
//     public class Add
//     {
//         public class Command : IRequest<Result<Photo>>
//         {
//             public IFormFile File { get; set; }
//         }

//         public class Handler : IRequestHandler<Command, Result<Photo>>
//         {
//             private readonly DataContext _context;

//             public Handler(DataContext context, IPhotoAccessor photoAccesor, IUserAccessor userAccessor)
//             {
//                 _context = context;
//             }

//             public Task<Result<Photo>> Handle(Command request, CancellationToken cancellationToken)
//             {
//                 throw new NotImplementedException();
//             }
//         }
//     }
// }