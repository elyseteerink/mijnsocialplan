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
            List<SocialPlan> usersPlannen = new List<SocialPlan>();

            if (this.User.Identity.IsAuthenticated)
            {
                usersPlannen = db.SocialPlannen.Where(p => p.UserName == this.User.Identity.Name).ToList();
            }

            return PartialView("SocialPlannenMenu", usersPlannen);
        }

        //
        // GET: /SocialPlan/
        public ActionResult Index()
        {
            return View();
        }

        [Authorize]
        public ActionResult Create()
        {
            return View();
        }
	}
}