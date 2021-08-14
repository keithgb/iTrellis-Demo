using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace iTrellis_Demo.Services
{
    public class JsonSevice
    {
        public static JArray GetVehicles(string path) {

            using (StreamReader reader = File.OpenText(@path))
            {
                JArray a = (JArray)JToken.ReadFrom(new JsonTextReader(reader));
                return a;
            }
        }
    }
}
