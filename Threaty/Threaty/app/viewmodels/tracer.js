define(['durandal/app', 'knockout'], function (app, ko) {
    // var ctor = function () {
    var self = {};
    self.searchText = ko.observable();
    self.isBusy = ko.observable(false);
    self.isBusyIoc = ko.observable(false);
    self.isBusyDb = ko.observable(false);
    self.iocs = ko.observable([]);
    self.dbIocs = ko.observable([]);
    self.isSomethingSearched = ko.observable(false);
//    self.isIocInDb = ko.observable(null);

    self.activate = function () {
        return true;
    };

    var Ioc = function (status, sourceName, malwareName, lastUpdate, isSyncWithDb, summary) {
        var selfIoc = this;
        selfIoc.status = status;
        selfIoc.sourceName = sourceName;
        selfIoc.malwareName = malwareName;
        selfIoc.lastUpdate = lastUpdate;
        selfIoc.isInDb = isSyncWithDb;
        selfIoc.summary = summary;
    }

    var DbIoc = function (sourceName, malwareName, lastUpdate, isActive) {
        var selfIoc = this;
        selfIoc.sourceName = sourceName;
        selfIoc.malwareName = malwareName;
        selfIoc.lastUpdate = lastUpdate;
        selfIoc.isActive = isActive;
    }

    self.getIocs = function (searchText) {
        var def = $.Deferred();

        //            $.getJSON('api/Threaty/GetIocs').done(function(result) {
        //                var list = [];
        //                for (var i in result) {
        //                    var item = result[i];
        //
        //                    list.push(new ThreatSource(item.name, item.title, item.url));
        //                }
        //                def.resolve(list);
        //
        //            });

        setTimeout(function () {
            def.resolve([
                new Ioc("ok", "Threat Miner", "Floky", "2015/05/04", true),
                new Ioc("ok", "Threat Crowd", "Floky", "2015/05/04", false),
                new Ioc("threat", "OTX", "Stuxnet", "2015/05/04", true),
                new Ioc("ok", "Total Hash", "Floky", "2015/05/04", false),
                new Ioc("ok", "Malware Check", "Stuxnet", "2015/05/04", true),
                new Ioc("ok", "Bit Defender", "Floky", "2015/05/04", false)
            ]);
        }, 1500);

        return def;

    }

    self.getDbIocs = function (searchText) {
        var def = $.Deferred();

        //            $.getJSON('api/Threaty/GetIocs').done(function(result) {
        //                var list = [];
        //                for (var i in result) {
        //                    var item = result[i];
        //
        //                    list.push(new ThreatSource(item.name, item.title, item.url));
        //                }
        //                def.resolve(list);
        //
        //            });

        setTimeout(function () {
            def.resolve([
                new DbIoc("Threat Miner", "Floky", "2015/05/04-2016/11/23", true),
                new DbIoc("Threat Crowd", "Floky", "2015/05/04-2016/11/23", false),
                new DbIoc("OTX", "Stuxnet", "2015/05/04-2016/11/23", true)
//                new Ioc("ok", "Total Hash", "Floky", "2015/05/04-2016/11/23", false),
//                new Ioc("ok", "Malware Check", "Stuxnet", "2015/05/04-2016/11/23", true),
//                new Ioc("ok", "Bit Defender", "Floky", "2015/05/04-2016/11/23", false)
            ]);
        }, 2500);

        return def;

    }

//    self.getIsIocInDb = function (searchText) {
//        var def = $.Deferred();
//
//        setTimeout(function () {
//            def.resolve(true);
//        }, 1500);
//
//        return def;
//    }


    self.search = function () {
        self.isBusy(true);
        self.isBusyIoc(true);
        self.isBusyDb(true);
        self.isSomethingSearched(true);
        var searchText = self.searchText;
        self.getIocs(searchText)
            .done(function (sources) {
                self.iocs(sources);
                self.isBusyIoc(false);
                self.isBusy(false);
                //toastr.success(sources.length + " sources identified to gather information");
            })
            .fail(function (err) {
                console.log(err);
                toastr.error(err);
                self.isBusyIoc(false);
                self.isBusy(false);
            });

        self.getDbIocs(searchText)
            .done(function (sources) {
                self.dbIocs(sources);
                self.isBusyDb(false);
            })
            .fail(function (err) {
                console.log(err);
                toastr.error(err);
                self.isBusyDb(false);
            });

//        self.getIsIocInDb(searchText).done(function(isIocInDb) {
//            self.isIocInDb(isIocInDb);
//            })
//            .fail(function(err) {
//                console.log(err);
//                toastr.error(err);
//            });
    }

    self.onSearchClicked = function (data, elem) {
        self.search();
    };
    // };



    return self;
});