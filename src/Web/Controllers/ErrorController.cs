using System.Linq;
using Microsoft.AspNet.Mvc;
using System.Collections;

namespace Web.Controllers
{
    public class ErrorController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
