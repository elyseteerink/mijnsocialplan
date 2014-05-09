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

        public string UserName { get; set; }

        public string Titel { get; set; }

        public List<Contactpersoon> Contactpersonen { get; set; }

        public string Afspraken { get; set; }

        public List<string> Urls { get; set; }

        public string Doelgroep { get; set; }

        public string ToonStijl { get; set; }

        public string Proposistie { get; set; }

        public List<string> SuccesFactoren { get; set; }

        public List<string> Kansen { get; set; }

        public List<string> Gevaren { get; set; }

        public List<string> DoelenOns { get; set; }

        public List<string> DoelenVolgers { get; set; }

        public List<string> Hashtags { get; set; }

        public List<Community> Communities { get; set; }

        public List<Kanaal> Kanalen { get; set; }
    }
}