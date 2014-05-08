using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace MijnSocialPlan.Models
{
    public class Community
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long CommunityID { get; set; }

        public string Naam { get; set; }

        public string Url { get; set; }
    }
}