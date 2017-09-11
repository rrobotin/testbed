var fs = require('fs');
var fileToUpdate = 'createReportPage.js';

//read the unprocessed results
fs.readFile('roxna/output.txt', 'utf8', function (err,data) {
    if (err) {
        return console.log(err);
    }
    JSON.stringify(data)
    remove();
    append(data);
});


function append (inputs) {
    var body = fs.readFileSync(fileToUpdate).toString();
    body = body.split('\n');
    body.splice(0,0, 'var inputs = ' + inputs);
    var output = body.join('\n');
    fs.writeFileSync(fileToUpdate, output);
}


function remove () {
    var body = fs.readFileSync(fileToUpdate).toString();
    body = body.split('\n').slice(1);
    var output = body.join('\n');
    fs.writeFileSync(fileToUpdate, output);
}

