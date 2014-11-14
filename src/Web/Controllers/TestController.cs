using System.Linq;
using Microsoft.AspNet.Mvc;

namespace Web.Controllers
{
    public class TestController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}