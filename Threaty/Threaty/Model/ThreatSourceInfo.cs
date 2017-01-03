using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Threaty.Model
{
    public class ThreatSourceInfo
    {
        public string Name { get; set; }
        public string Title { get; set; }
        public string Rank { get; set; }
        public string Url { get; set; }

        public static List<ThreatSourceInfo> All => new List<ThreatSourceInfo>()
        {
            new ThreatSourceInfo()
            {
                Name = "threatcrowd",
                Title = "Threat Crowd",
                Url = "https://www.threatcrowd.org"
            },
            new ThreatSourceInfo()
            {
                Name = "threatminer",
                Title = "Threat Miner",
                Url = "https://www.threatminer.org/"
            },
            new ThreatSourceInfo()
            {
                Name = "totalhash",
                Title = "Total Hash",
                Url = "https://totalhash.cymru.com"
            },
            new ThreatSourceInfo()
            {
                Name = "cymon",
                Title = "Cymon",
                Url = "https://cymon.io"
            },
            new ThreatSourceInfo()
            {
                Name = "iptracker",
                Title = "IP Tracker",
                Url = "http://www.ip-tracker.org/blacklist-check.php"
            },new ThreatSourceInfo()
            {
                Name = "urlvoid",
                Title = "URL Void",
                Url = "http://www.urlvoid.com"
            },
            new ThreatSourceInfo()
            {
                Name = "ipvoid",
                Title = "IP Void",
                Url = "http://www.ipvoid.com/ip-blacklist-check"
            },
            new ThreatSourceInfo()
            {
                Name = "whatismyipaddress",
                Title = "What is my IP address",
                Url = "http://whatismyipaddress.com/blacklist-check"
            },
        };
    }
}