namespace Cheapflights.Meta.Web.Controllers {

  using Microsoft.AspNet.Mvc;

  public class HomeController : Controller {
    public IActionResult Index() {
      ViewBag.Name = "Barney";
      return View();
    }
  }


}
