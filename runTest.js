var appRtcTest = require('./apprtcTestReports.js');
var fs = require('fs')


appRtcTest().then((data) => {
    var res = JSON.parse(JSON.stringify(data));
    console.log("appRtcOutput = " + JSON.stringify(res));
    fs.writeFile('reports/appRtcOutput.txt', JSON.stringify(res), (err) => {
        if (err) throw err;
    console.log('The file has been saved!');
    });
});