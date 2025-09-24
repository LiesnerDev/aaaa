using Microsoft.AspNetCore.Mvc;

namespace ProjetoExemplo.Controllers
{
    public class AlertController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}