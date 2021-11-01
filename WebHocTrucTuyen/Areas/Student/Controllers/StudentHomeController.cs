using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebHocTrucTuyen.Areas.Student.Controllers
{
    public class StudentHomeController : Controller
    {
        // GET: Student/StudentHome
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult ThongTinCaNhan()
        {
            return View();
        }
    }
}