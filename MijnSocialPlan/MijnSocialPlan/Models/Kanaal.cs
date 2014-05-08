using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace MijnSocialPlan.Models
{
    public class Kanaal
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long KanaalID { get; set; }

        public string Titel { get; set; }

        public List<string> PadenNaarBinnen { get; set; }

        public List<ContentItem> ContentItems { get; set; }

        public List<string> PadenNaarBuiten { get; set; }
    }
}