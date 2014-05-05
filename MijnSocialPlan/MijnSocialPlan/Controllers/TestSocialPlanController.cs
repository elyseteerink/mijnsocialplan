using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using MijnSocialPlan.Models;

namespace MijnSocialPlan.Controllers
{
    public class TestSocialPlanController : Controller
    {
        private MijnSocialPlanDbContext db = new MijnSocialPlanDbContext();

        // GET: /TestSocialPlan/
        public ActionResult Index()
        {
            return View(db.SocialPlannen.ToList());
        }

        // GET: /TestSocialPlan/Details/5
        public ActionResult Details(long? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            SocialPlan socialplan = db.SocialPlannen.Find(id);
            if (socialplan == null)
            {
                return HttpNotFound();
            }
            return View(socialplan);
        }

        // GET: /TestSocialPlan/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: /TestSocialPlan/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include="SocialPlanID,Title")] SocialPlan socialplan)
        {
            if (ModelState.IsValid)
            {
                db.SocialPlannen.Add(socialplan);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(socialplan);
        }

        // GET: /TestSocialPlan/Edit/5
        public ActionResult Edit(long? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            SocialPlan socialplan = db.SocialPlannen.Find(id);
            if (socialplan == null)
            {
                return HttpNotFound();
            }
            return View(socialplan);
        }

        // POST: /TestSocialPlan/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include="SocialPlanID,Title")] SocialPlan socialplan)
        {
            if (ModelState.IsValid)
            {
                db.Entry(socialplan).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(socialplan);
        }

        // GET: /TestSocialPlan/Delete/5
        public ActionResult Delete(long? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            SocialPlan socialplan = db.SocialPlannen.Find(id);
            if (socialplan == null)
            {
                return HttpNotFound();
            }
            return View(socialplan);
        }

        // POST: /TestSocialPlan/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(long id)
        {
            SocialPlan socialplan = db.SocialPlannen.Find(id);
            db.SocialPlannen.Remove(socialplan);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
