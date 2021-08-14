using System;

namespace iTrellis_Demo
{
    public class Vehicle
    {
        public string _id { get; set; }

        public string Make { get; set; }

        public int Year { get; set; }

        public string Color { get; set; }
        public decimal Price { get; set; }
        public int Mileage { get; set; }
        public bool SunRoof {get; set;}

        public bool FourWheelDrive { get; set; }

        public bool LowMiles { get; set; }

        public bool PowerWindows { get; set; }

        public bool Navigation { get; set; }

        public bool HeatedSeats { get; set; }

    }
}
