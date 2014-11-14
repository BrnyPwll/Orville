using System;
using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Diagnostics;
using Microsoft.AspNet.Hosting;
using Microsoft.AspNet.Http;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Routing;
using Microsoft.AspNet.Security.Cookies;
using Microsoft.Framework.ConfigurationModel;
using Microsoft.Framework.DependencyInjection;
using Microsoft.Framework.Logging;
using Microsoft.Framework.Logging.Console;



namespace Cheapflights.Meta.Web
{
  public class Startup
  {

    public IConfiguration Configuration {get;set;}


    public Startup(IHostingEnvironment env) {

      Configuration = new Configuration()
        .AddJsonFile("config.json")
        .AddEnvironmentVariables();


    }


    public void ConfigureServices(IServiceCollection services) {
      services.AddMvc();
    }

    public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory) {
      loggerFactory.AddConsole();


      app.UseErrorPage(ErrorPageOptions.ShowAll);


      app.UseStaticFiles();

      app.UseIdentity();

      app.UseMvc(routes => {
          routes.MapRoute(
            name: "default",
            template: "{controller}/{action}/{id?}",
            defaults: new { controller = "Home", action = "Index" }
            );
        });
    }




  }
}
