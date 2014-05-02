using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace MijnSocialPlan.Models
{
    public class SocialPlan
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long SocialPlanID { get; set; }
        public string Title { get; set; }
    }
}