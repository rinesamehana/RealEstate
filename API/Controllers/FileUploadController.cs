// using System;
// using System.Collections.Generic;
// using System.Linq;
// using System.Threading;
// using System.Threading.Tasks;

// using Domain;
// using Microsoft.AspNetCore.Mvc;
// using Microsoft.EntityFrameworkCore;
// using Persistence;
// using Microsoft.AspNetCore.Hosting;
// using System.IO;

// namespace API.Controllers

// {
//     [Route("api/[controller]")]
//     [ApiController]

//     public class FileUploadController : BaseApiController
//     {
//         private static IWebHostEnvironment _webHostEnviroment;
//         public FileUploadController(IWebHostEnvironment webHostEnviroment)
//         {
//             _webHostEnviroment = webHostEnviroment;
//         }
//         [HttpPost]
//         [Route("upload")]
//         public async Task<string> Upload([FromForm] Shtepia obj)
//         {
//             if(obj.photo.Length>0)
//             {
//                 try
//                 {
//                     if(!Directory.Exists(_webHostEnviroment.WebRootPath + "\\Images\\"))
//                     {
//                         Directory.CreateDirectory(_webHostEnviroment.WebRootPath+ "\\Images\\");
//                     }
//                     using(FileStream fileStream = System.IO.File.Create(_webHostEnviroment.WebRootPath + "\\Images\\" + obj.photo.FileName))
//                     {
//                         obj.photo.CopyTo(fileStream);
//                         fileStream.Flush();
//                         return "\\Images\\" + obj.photo.FileName;
//                     }

//                 }catch(Exception ex)
//                 {
//                     return ex.ToString();
//                 }
//             }
//             else {
//                 return "Upload Failed";
//             }
//         }
//     }
// }