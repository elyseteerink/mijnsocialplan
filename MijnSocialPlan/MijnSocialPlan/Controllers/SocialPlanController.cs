using MijnSocialPlan.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;

namespace MijnSocialPlan.Controllers
{
    [Authorize]
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
        public ActionResult Save(SocialPlan socialPlan)
        {


            //Indien nieuw plan
            if (socialPlan.SocialPlanID == 0)
            {
                //Username zetten
                socialPlan.UserName = this.User.Identity.Name;

                //opslaan
            }
            //Bestaand plan
            else
            {
                //wijzigen


            }

            //db.SaveChangesAsync();

            return null;
        }
	}
}