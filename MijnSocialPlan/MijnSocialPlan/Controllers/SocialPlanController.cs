using MijnSocialPlan.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MijnSocialPlan.Controllers
{
    public class SocialPlanController : Controller
    {
        private MijnSocialPlanDbContext db = new MijnSocialPlanDbContext();

        public PartialViewResult GetUserSocialPlannenMenu()
        {
            List<SocialPlan> usersPlannen = null;

            if(this.User.Identity.IsAuthenticated)
            {
                usersPlannen = db.SocialPlannen.Where(p => p.UserName == this.User.Identity.Name).ToList();
            }

            //....

            return PartialView("SocialPlannenMenu");
        }

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