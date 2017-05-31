var moment = require('moment');

var ga_config = require('../config/ga_config');
var utility = require('./utility');

exports.getToken = function(key, cb) {
    try {

        //########## GA AUTHENTICATE ###################
        var _accessToken;
        console.log("************************** GOOGLE AUTHENTICATION EXECUTED ****************************");

        // AUTHENTICATE WITH GOOGLE APIS CONSOLE. 

        googleAuth.authenticate({
            // use the email address of the service account, as seen in the API console
            email: ga_config.email,
            // use the PEM file we generated from the downloaded key
            keyFile: key,
            // specify the scopes you wish to access
            scopes: ['https://www.googleapis.com/auth/analytics.readonly']
        }, function(err, token) {
            if (err) {
                console.log("#### Error while Google Auth ##### " + err);
            } else {
                console.log("Access Token : ");
                _accessToken = token;
                cb(_accessToken);
                //console.log("############# TOKEN ############ "+_accessToken);
            }
        });
    } catch (ex) {
        console.log("Exception In Token : " + ex);
    }
};

//############# SUMMARY COMMAND ################
exports.getSummary = function(res, callback) {

    var keypath = 'axisGA.pem'
    var _gaIds = 'ga:110774585';
    var _metricsReport1 = 'ga:users,ga:newUsers,ga:pageviews';
    var _dimensionsReport1 = 'ga:sessionCount';
    var _maxResult = "10000";
    var start_index = 1;

    var d = new Date();
    d.setDate(d.getDate() - 1);
    var _startDate = moment(d).format('YYYY-MM-DD');
    _endDate = moment(d).format('YYYY-MM-DD');

    var _url = 'https://www.googleapis.com/analytics/v3/data/ga?ids=' + _gaIds + '&start-date=' + _startDate + '&end-date=' + _endDate + '&metrics=' + _metricsReport1 + '&dimensions=' + _dimensionsReport1;
    var _data = {};
    utility.getToken(keypath, function(_accessToken) {
        request(_url + '&max-results=' + _maxResult + '&access_token=' + _accessToken + '&start-index=' + start_index, function(err, response, body) {
            if (err) {
                console.log("### Error While Request ### " + err);
            } else {
                _data = JSON.parse(body);
                //res.send(_data.totalsForAllResults);
                //var _data.rows;
                var message = "The Total Yesterday's website visits as follows : \n\n"+"Total Users Visit on Last Day :"+_data.totalsForAllResults["ga:users"]+"\n New Users Visits : "+_data.totalsForAllResults["ga:newUsers"]+"\n Total Page Views in Last Day Was : "+_data.totalsForAllResults["ga:pageviews"];
                callback(message);

            }
        });
    });
}


exports.getMetrics = function(data1, data2, res) {
    var keypath = 'axisGA.pem'
    var _gaIds = 'ga:110774585';
    var _metricsReport1 = data1;
    var _dimensionsReport1 = data2;
    var _maxResult = "10000";
    var start_index = 1;

    var d = new Date();
    d.setDate(d.getDate() - 1);
    var _startDate = moment(d).format('YYYY-MM-DD');
    _endDate = moment(d).format('YYYY-MM-DD');
    //var _startDate = moment(todate).format('YYYY-MM-DD');
    //_endDate = moment(_startDate).format('YYYY-MM-DD');


    var _url = 'https://www.googleapis.com/analytics/v3/data/ga?ids=' + _gaIds + '&start-date=' + _startDate + '&end-date=' + _endDate + '&metrics=' + _metricsReport1 + '&dimensions=' + _dimensionsReport1;
    var _data = {};
    utility.getToken(keypath, function(_accessToken) {
        request(_url + '&max-results=' + _maxResult + '&access_token=' + _accessToken + '&start-index=' + start_index, function(err, response, body) {
            if (err) {
                console.log("### Error While Request ### " + err);
            } else {
                _data = JSON.parse(body);
                res.send(_data);

            }
        });
    });
}

//**************** PLATFORM or DEVICE *******************************
exports.getPlatform = function(res, callback) {

    var keypath = 'axisGA.pem'
    var _gaIds = 'ga:110774585';
    var _metricsReport1 = 'ga:users';
    var _dimensionsReport1 = 'ga:operatingSystem';
    var filters = 'ga:operatingSystem==Android,ga:operatingSystem==Macintosh,ga:operatingSystem==Windows';
    var _maxResult = "10000";
    var start_index = 1;

    var d = new Date();
    d.setDate(d.getDate() - 1);
    var _startDate = moment(d).format('YYYY-MM-DD');
    _endDate = moment(d).format('YYYY-MM-DD');

    var _url = 'https://www.googleapis.com/analytics/v3/data/ga?ids=' + _gaIds + '&start-date=' + _startDate + '&end-date=' + _endDate + '&metrics=' + _metricsReport1 + '&dimensions=' + _dimensionsReport1;
    var _data = {};
    utility.getToken(keypath, function(_accessToken) {
        request(_url + '&max-results=' + _maxResult + '&access_token=' + _accessToken + '&start-index=' + start_index+'&filters='+filters, function(err, response, body) {
            if (err) {
                console.log("### Error While Request ### " + err);
            } else {
                _data = JSON.parse(body);
                //res.send(_data.totalsForAllResults);
                var message = "You Site is acceses on Following operating System \n Android : "+ _data.rows[0][1]+"\nMacintosh : "+_data.rows[1][1]+"\nWindows : "+_data.rows[2][1]
                callback(message);

            }
        });
    });
}

