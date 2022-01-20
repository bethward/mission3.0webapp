using System;
using System.ComponentModel.DataAnnotations;
namespace mission3webapp.Models
{
    public class GradeCalculatorModel
    {
        [Required,]
        [Range(0, 100, ErrorMessage = "Enter number between 0 to 100")]
        public string asg { get; set; }

        [Required]
        [Range(0, 100, ErrorMessage = "Enter number between 0 to 100")]
        public string gpj { get; set; }

        [Required]
        [Range(0, 100, ErrorMessage = "Enter number between 0 to 100")]
        public string qzz { get; set; }

        [Required]
        [Range(0, 100, ErrorMessage = "Enter number between 0 to 100")]
        public string exm { get; set; }

        [Required]
        [Range(0, 100, ErrorMessage = "Enter number between 0 to 100")]
        public string ntx { get; set; }

    }
}