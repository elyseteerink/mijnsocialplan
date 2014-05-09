using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace MijnSocialPlan.Models
{
    public class MijnSocialPlanDbContext : IdentityDbContext<ApplicationUser>
    {
        public DbSet<SocialPlan> SocialPlannen { get; set; }

        public MijnSocialPlanDbContext()
            : base("MijnSocialPlanDbContext")
        {
        }
    }

    public class DbInitializer : DropCreateDatabaseAlways<MijnSocialPlanDbContext>
    {
        protected override void Seed(MijnSocialPlanDbContext context)
        {
            base.Seed(context);

            RegisterViewModel mMenno = new RegisterViewModel()
            {
                UserName = "Menno",
                Password = "M3nj00p3nj00",
                ConfirmPassword = "M3nj00p3nj00"
            };

            ApplicationUser uMenno = new ApplicationUser() {
                UserName = mMenno.UserName
            };

            Startup.UserManagerFactory().CreateAsync(uMenno, mMenno.Password);

            RegisterViewModel mElyse = new RegisterViewModel()
            {
                UserName = "Elyse",
                Password = "ikweljijniet18",
                ConfirmPassword = "ikweljijniet18"
            };

            ApplicationUser uElyse = new ApplicationUser()
            {
                UserName = mElyse.UserName
            };

            Startup.UserManagerFactory().CreateAsync(uElyse, mElyse.Password);



            //Social plannen aanmaken
            SocialPlan p1 = new SocialPlan() {
                Titel = "Plan Elyse",
                UserName = uElyse.UserName
            };
        
            SocialPlan p2 = new SocialPlan()
            {
                Titel = "Plan Menno",
                UserName = uMenno.UserName
            };

            context.SocialPlannen.Add(p1);
            context.SocialPlannen.Add(p2);

            //Opslaan
            context.SaveChanges();
        }

    }
}