using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Forums.API.Models
{
    [Table("QuestionTags")]
    public class QuestionTags
    {
        public int Id { get; set; }
        public int TagId { get; set; }
        public int QuestionId { get; set; }
    }
}
