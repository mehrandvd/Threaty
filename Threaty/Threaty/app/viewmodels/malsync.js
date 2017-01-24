define(['durandal/app', 'knockout'], function (app, ko) {
    var self = {};
    self.searchText = ko.observable();
    self.isBusy = ko.observable(false);
    self.iocs = ko.observable([]);
    self.isSomethingSearched = ko.observable(false);

    self.activate = function () {
        return true;
    };

    var Ioc = function (iocType, signature, reporterRepositories) {
        var selfIoc = this;
        selfIoc.iocType = iocType;
        selfIoc.signature = signature;
        selfIoc.reporterRepositories = ko.observableArray(reporterRepositories || []);
    };

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
                new Ioc("h#", "a548e5yav85j62", [{ name: 'otx' }, { name: 'hailataxi' }]),
                new Ioc("ip", "19.36.56.14", [{ name: 'threaty' }, { name: 'hailataxi' }]),
                new Ioc("ip", "96.54.21.3", [{ name: 'otx' }, { name: 'pentagon' }]),
                new Ioc("url", "http://hungryvirus.com", [{ name: 'bankingcore' }, { name: 'hailataxi' }]),
                new Ioc("h#", "b85d6hahjshg54asd56", [{ name: 'otx' }]),
                new Ioc("url", "http://wildhunters.net", [{ name: 'threaty' }])
            ]);
        }, 1500);

        return def;

    };
  
    self.search = function () {
        self.isBusy(true);
        self.isSomethingSearched(true);
        var searchText = self.searchText;
        self.getIocs(searchText)
            .done(function (sources) {
                self.iocs(sources);
                self.isBusy(false);
            })
            .fail(function (err) {
                console.log(err);
                toastr.error(err);
                self.isBusy(false);
            });
    };

    self.onSearchClicked = function (data, elem) {
        self.search();
    };

    return self;
});