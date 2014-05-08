using MijnSocialPlan.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MijnSocialPlan.Controllers
{
    //[Authorize]
    public class SocialPlanController : Controller
    {
        private MijnSocialPlanDbContext db = new MijnSocialPlanDbContext();

        [AllowAnonymous]
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

        
        public ActionResult Create()
        {
            Console.WriteLine("Create!");

            return View();
        }

        [HttpPost]
        //[Route("SocialPlan/Save")]
        public ActionResult Save(SocialPlan socialPlan)
        {
            Console.WriteLine("Save!");

            return null;
        }
	}
}