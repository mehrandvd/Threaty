define(['durandal/app', 'knockout'], function (app, ko) {
   // var ctor = function () {
        var self = {};
        self.searchText = ko.observable();
        self.isBusy = ko.observable(false);
        self.sources =ko.observable([]);

        self.activate = function() {
            return true;
        };

       

        var Threat = function(type) {
            var selfThreat = this;
            selfThreat.TYPE = type;
        }

        var ThreatSource = function (id, title, description) {
            var selfSource = this;
            selfSource.id = id;
            selfSource.title = title;
            selfSource.description = description;
            selfSource.isBusy = ko.observable(false);
            selfSource.threats = ko.observableArray();
        }

        self.getSources = function(searchText) {
            var def = $.Deferred();

            $.getJSON('api/Threaty/GetThreatSources').done(function(result) {
                var list = [];
                for (var i in result) {
                    var item = result[i];

                    list.push(new ThreatSource(item.name, item.title, item.url));
                }
                def.resolve(list);

            });

            //setTimeout(function () {
            //    def.resolve([
            //        new ThreatSource("1", "Threat Miner", "https://www.threatminer.org/"),
            //        new ThreatSource("1", "Threat Crowd", "https://www.threatcrowd.org"),
            //        new ThreatSource("1", "OTX", "otx.alienvault.com"),
            //        new ThreatSource("1", "Total Hash", "https://totalhash.cymru.com"),
            //        new ThreatSource("1", "Malware Check", "http://malwarecheck.org"),
            //        new ThreatSource("1", "Bit Defender", "http://www.bitdefender.com/scanner/online/free.html")
            //    ]);
            //}, 1500);

            return def;
        }

        function getThreats(threadSource) {
            var def = $.Deferred();

            setTimeout(function () {
                def.resolve([
                    new Threat("hash"),
                    new Threat("domain"),
                    new Threat("ioc"),
                    new Threat("attack")
                ]);
            }, 1200);

            return def;
        }

        function loadThreatSource(threadSource) {
            threadSource.isBusy(true);
            getThreats(threadSource)
                .done(function (result) {
                    threadSource.isBusy(false);

                })
                .fail(function (err) {
                    threadSource.isBusy(false);
                    toastr.error(err);
                    console.log(err);
                });
        }

       

        self.search = function() {
            self.isBusy(true);
            var searchText = self.searchText;
            self.getSources(searchText)
                .done(function(sources) {
                    self.sources(sources);
                    self.isBusy(false);

                    toastr.success(sources.length + " sources identified to gather information");

                    for (var sourceIndex in sources) {
                        var source = sources[sourceIndex];
                        loadThreatSource(source);
                    }

                })
                .fail(function(err) {
                    console.log(err);
                    toastr.error(err);
                    self.isBusy(false);
                });
        }

        self.onSearchClicked = function(data, elem) {
            self.search();
        };
   // };

   

    return self;
});