using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using iTrellis_Demo.Services;
using System.IO;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace iTrellis_Demo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VehicleController : ControllerBase
    {
        private readonly ILogger<VehicleController> _logger;

        IEnumerable<Vehicle> Data { get; set; }

        public VehicleController(ILogger<VehicleController> logger)
        {
            _logger = logger;
        }

        // GET: api/<VehicleController>
        [HttpGet]
        public IEnumerable<Vehicle> Get()
        {
            _logger.LogInformation("Getting Vehicles");

            string datafilepath = Path.Combine(Environment.CurrentDirectory, @"Data\data_sample.json");

            Newtonsoft.Json.Linq.JArray jsonData = JsonSevice.GetVehicles(datafilepath);

            var data = jsonData.Select(index => new Vehicle
            {
                _id = index["_id"].ToString(),
                Make = index["make"].ToString(),
                Year = Convert.ToInt32( index["year"].ToString()),
                Color = index["color"].ToString(),
                Price = Convert.ToDecimal(index["price"].ToString()),
                Mileage = Convert.ToInt32(index["mileage"].ToString()),
                SunRoof = Convert.ToBoolean(index["hasSunroof"].ToString()),
                FourWheelDrive = Convert.ToBoolean(index["isFourWheelDrive"].ToString()),
                LowMiles = Convert.ToBoolean(index["hasLowMiles"].ToString()),
                PowerWindows = Convert.ToBoolean(index["hasPowerWindows"].ToString()),
                Navigation = Convert.ToBoolean(index["hasNavigation"].ToString()),
                HeatedSeats = Convert.ToBoolean(index["hasHeatedSeats"].ToString()),

            }).ToArray();

            //var rng = new Random();
            //return Enumerable.Range(1, 5).Select(index => new Vehicle
            //{
            //    _id = Guid.NewGuid().ToString(),
            //    Name = "Vehicle Name ",
            //})
            //.ToArray();

            this.Data = data;
            
            return this.Data;
        }

        // GET api/<ValuesController>/5
        [HttpGet("{id}")]
        public Vehicle Get(string id)
        {
            // var vehicle = new Vehicle();

            //  return vehicle;

            if (Data != null) {
                var item = Data.First(item => item._id == id );
                return item;
            } else
            {
                return this.Get().FirstOrDefault(item => item._id == id);
            }

        }

        // POST api/<ValuesController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<ValuesController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<ValuesController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
