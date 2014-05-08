using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace MijnSocialPlan.Models
{
    public class ContentItem
    {
        public enum PostType { Humor, Informatief, Winactie }

        public enum ContentType { Foto, Video, Tekst }

        public enum LikableSharable { Likable, Sharable }


        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long ContentItemID { get; set; }

        public string Titel { get; set; }

        public PostType SoortPost { get; set; }

        public List<ContentType> Onderdelen { get; set; }

        public List<string> CallToActions { get; set; }
    }
}