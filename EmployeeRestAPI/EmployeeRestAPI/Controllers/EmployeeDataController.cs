using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Mvc;
using EmployeeData;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace EmployeeRestAPI.Controllers
{
    public class EmployeeDataController : ApiController
    {
        //[System.Web.Http.Route("api/Get")]
        public IEnumerable<Employee> Get()
        {
            using (
                TestRestAPIEntities1 entities = new TestRestAPIEntities1())
            {
                return entities.Employees.ToList();
            }
        }

        public void Post([FromBody]Employee employee)
        {
            using (TestRestAPIEntities1 entities = new TestRestAPIEntities1())
            {
                entities.Entry(employee).State = System.Data.Entity.EntityState.Added;
                entities.SaveChanges();
            }
        }
         public void Put(Employee employee)
        {
            using (TestRestAPIEntities1 entities = new TestRestAPIEntities1())
            {
                entities.Entry(employee).State = System.Data.Entity.EntityState.Modified;
                entities.SaveChanges();
            }
        }

        public void Delete(Employee employee)
        {
            using (TestRestAPIEntities1 entities = new TestRestAPIEntities1())
            {
                entities.Entry(employee).State = System.Data.Entity.EntityState.Deleted;
                entities.SaveChanges();
            }
        }
    }

    //public Employee Get(int id)
    //{
    //    using (TestEntities1 entities = new TestEntities1())
    //    {
    //        return entities.Employees.FirstOrDefault(e => e.ID == id);
    //    }
    //}


}
