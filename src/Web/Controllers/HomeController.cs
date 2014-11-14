namespace Cheapflights.Meta.Web.Controllers {

  using Microsoft.AspNet.Mvc;
  using Cheapflights.Meta.Web.ViewModels;

  public class HomeController : Controller {
    public IActionResult Index() {

      var model = new PageViewModel();

      model.PageTitle = "Paaterino";
      return View(model);
    }
  }


}
