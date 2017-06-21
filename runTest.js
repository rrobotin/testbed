var Testing = require('./apprtcTestReports.js');

var result;
function setResult(x) {
    result = x;
}


Testing().then((data) => {
    var res = JSON.parse(JSON.stringify(data));
console.log("testResult = " + JSON.stringify(res));
setResult(data);
});
