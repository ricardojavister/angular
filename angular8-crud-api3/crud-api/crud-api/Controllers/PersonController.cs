using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http;
using crudapi.Models;

namespace crudapi.Controllers
{
    public class PersonController
    {
        public IHttpActionResult GetAllStudents()
        {
            IList<PersonModel> students = null;

            using (var ctx = new SchoolDBEntities())
            {
                students = ctx.Students.Include("StudentAddress")
                            .Select(s => new StudentViewModel()
                            {
                                Id = s.StudentID,
                                FirstName = s.FirstName,
                                LastName = s.LastName
                            }).ToList<StudentViewModel>();
            }

            if (students.Count == 0)
            {
                return NotFound();
            }

            return Ok(students);
        }
    }
}
