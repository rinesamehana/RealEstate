
using API.Extensions;
using API.Middleware;
using Application.LlojiUserA;
using FluentValidation.AspNetCore;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc.Authorization;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Persistence;
using Domain;
using Microsoft.AspNetCore.Identity;
using API.SignalR;

namespace API
{
    public class Startup
    {
        private readonly IConfiguration _config;
        public IConfiguration Configuration { get; }
        public Startup(IConfiguration config)
        {
            _config = config;
        }

        // This method gets called by the runtime. Use this method to add services to the container.

   
        public void ConfigureServices(IServiceCollection services)
        {


            services.AddControllers(opt =>
          {
              var policy = new AuthorizationPolicyBuilder().RequireAuthenticatedUser().Build();
              opt.Filters.Add(new AuthorizeFilter(policy));



          }).AddFluentValidation(config =>
         
    
         {
           
             config.RegisterValidatorsFromAssemblyContaining<Create>();

                  
         });

            services.AddControllers().AddFluentValidation(config =>
            {
                
                config.RegisterValidatorsFromAssemblyContaining<Create>();
                      
            
            });
            services.AddApplicationServices(_config);
            services.AddIdentityServices(_config);
 
      
            services.AddSwaggerGen();
        }


        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {

      


            app.UseMiddleware<ExceptionMiddleware>();
            if (env.IsDevelopment())
            {

                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "API v1"));
            }

            // app.UseHttpsRedirection();

            app.UseRouting();
            app.UseDefaultFiles();
            app.UseStaticFiles();
           
            app.UseCors("CorsPolicy");

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
                endpoints.MapHub<ChatHub>("/chat");
            

            });
        }
    }
}
