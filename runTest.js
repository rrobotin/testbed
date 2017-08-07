var Testing = require('./apprtcTestReports.js');
var fs = require('fs')


Testing().then((data) => {
    var res = JSON.parse(JSON.stringify(data));
    console.log("testResult = " + JSON.stringify(res));
    fs.writeFile('output.txt', JSON.stringify(res), (err) => {
        if (err) throw err;
    console.log('The file has been saved!');
    });
});
