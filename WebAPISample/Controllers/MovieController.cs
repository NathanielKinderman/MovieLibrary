using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebAPISample.Models;

namespace WebAPISample.Controllers
{
    public class MovieController : ApiController
    {
        ApplicationDbContext db;
        public MovieController()
        {
            db = new ApplicationDbContext();

        }

        // GET api/values
        public IHttpActionResult Get()
        {
            IEnumerable<Movie> movies = db.Movies.ToList();
            // Retrieve all movies from db logic
            return Ok(movies);
        }

        // GET api/values/5

        public IHttpActionResult Get(int id)
        {
            // Retrieve movie by id from db logic
            var movie = db.Movies.Find(id);
            return Ok();
        }

        // POST api/values
        [HttpPost]
        public IHttpActionResult Post([FromBody]Movie value)
        {
            // Create movie in db logic
            Movie movie = new Movie();
            return Ok(movie);
        }

        // PUT api/values/5 
        [HttpPut]
        public IHttpActionResult Put(int id, [FromBody]Movie value)
        {
            var movieToEdit = db.Movies.FirstOrDefault();
            movieToEdit.Title = value.Title;
            movieToEdit.Director = value.Director;
            movieToEdit.Genre = value.Genre;
            db.SaveChanges();
            return Ok();

            // Update movie in db logic
        }
    }
}