using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using Threaty.Model;

namespace Threaty.ApiController
{
    public class ThreatyController : System.Web.Http.ApiController
    {
        [HttpGet]
        public List<string> GetThreats()
        {
            return new List<string>() {"Mehran", "Pourazam"};
        }

        [HttpGet]
        public List<ThreatSourceInfo> GetThreatSources()
        {
            return ThreatSourceInfo.All;
        }
    }
}