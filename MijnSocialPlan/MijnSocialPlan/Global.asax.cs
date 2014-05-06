using MijnSocialPlan.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;

namespace MijnSocialPlan
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);

            //Toegevoegd om de database initieel te vullen met testdata
            Database.SetInitializer(new DbInitializer());
            MijnSocialPlanDbContext c = new MijnSocialPlanDbContext();
            c.Database.Initialize(true);
        }
    }
}
