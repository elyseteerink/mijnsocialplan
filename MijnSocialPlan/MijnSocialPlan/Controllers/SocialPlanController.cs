using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MijnSocialPlan.Controllers
{
    public class SocialPlanController : Controller
    {
        //
        // GET: /SocailPlan/
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Create()
        {
            return View();
        }
	}
}