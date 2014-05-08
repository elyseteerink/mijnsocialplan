using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace MijnSocialPlan.Models
{
    public class Contactpersoon
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long ContactpersoonID { get; set; }

        public string Naam { get; set; }

        public string Email { get; set; }

        public string Telefoon { get; set; }
    }
}