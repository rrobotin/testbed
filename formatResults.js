var fs = require('fs');
var Reports= require('./createReportPage.js');



Reports().then((data) => {
    console.log("reportResult = " + JSON.stringify(data));
    fs.writeFile('reports.html', data, (err) => {
        console.log('data222IMPORTANT=== ' + data);
        if (err) throw err;
        console.log('The file has been saved!');
    });
});


