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
}