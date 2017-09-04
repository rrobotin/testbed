//add test results
/*var Input = {'name':'page loaded',
 'id':0 ,
 'action':'pass',
 'status': true,
 'type':'assert' };
 var Input2 = {
 'name':'joined room',
 'id':1,
 'action':'pass',
 'status':true,
 'type':'assert'
 };
 var Input3 = {
 'name':'joined room',
 'id':1,
 'action':'pass',
 'status':true,
 'type':'assert'
 };
 var Input4 = {
 'name':'joined room',
 'id':1,
 'action':'pass',
 'status':true,
 'type':'assert'
 };
 var Input5 = {
 'name':'joined room',
 'id':1,
 'action':'pass',
 'status':true,
 'type':'assert'
 };

 var Input01 = {
 'name':'Chrome-Chrome',
 'id':0,
 'type':'test'
 };

 var Input02 = {
 'name':'Chrome-Firefox',
 'id':0,
 'type':'test'
 };

 var Input03 = {
 'name':'Firefox-Firefox',
 'id':0,
 'type':'test'
 };

 var Input04 = {
 'name':'Edge-Edge',
 'id':0,
 'type':'test'
 };

 var Input041 = {
 'name':'Edge-Chrome, VP8',
 'id':0,
 'type':'test'
 };
 var Input042 = {
 'name':'Edge-Firefox',
 'id':0,
 'type':'test'
 };

 var Input011 = {
 'name':'Chrome-Chrome, icetransports=relay',
 'id':0,
 'type':'test'
 };
 var Input012 = {
 'name':'Chrome-Chrome, H264',
 'id':0,
 'type':'test'
 };
 var Input013 = {
 'name':'Chrome-Chrome, VP9',
 'id':0,
 'type':'test'
 };
 var Input014 = {
 'name':'Chrome-Chrome, VP8',
 'id':0,
 'type':'test'
 };
 var Input015 = {
 'name':'Firefox-Chrome, VP9',
 'id':0,
 'type':'test'
 };

 var Input031 = {
 'name':'Chrome-Edge, VP9',
 'id':0,
 'type':'test'
 };
 var Input016 = {
 'name':'Firefox-Edge, VP9',
 'id':0,
 'type':'test'
 };
 var Input017 = {
 'name':'Firefox-Chrome, VP941231',
 'id':0,
 'type':'test'
 };
 var Input018 = {
 'name':'Firefox-Edge, VP8',
 'id':0,
 'type':'test'
 };
 var Input019 = {
 'name':'Nightly-Nightly, VP8',
 'id':0,
 'type':'test'
 };*/
/*inputs['Chrome-Chrome'] = [Input01, Input, Input2, Input3, Input4, Input5];
 inputs['Chrome-Firefox'] = [Input02, Input, Input2, Input3, Input4, Input5];
 inputs['Firefox-Firefox'] = [Input03, Input, Input2, Input3, Input4, Input5];
 inputs['Edge-Edge'] = [Input04, Input, Input2, Input3, Input4, Input5];
 inputs['Edge-Chrome, VP8'] = [Input041, Input, Input2, Input3, Input4, Input5];
 inputs['Edge-Chrome, VP9'] = [Input041, Input, Input2, Input3, Input4, Input5];
 inputs['Edge-Firefox'] = [Input042, Input, Input2, Input3, Input4, Input5];
 inputs['Chrome-Chrome, icetransports=relay'] = [Input011, Input, Input2];
 inputs['Chrome-Chrome, H264'] = [Input012, Input3, Input2];
 inputs['Chrome-Chrome, VP8'] = [Input014, Input4, Input2];
 inputs['Chrome-Chrome, VP9'] = [Input013, Input5, Input2];
 inputs['Firefox-Chrome, VP9'] = [Input015, Input5, Input2];
 inputs['Chrome-Edge, VP9'] = [Input031, Input5, Input2];
 inputs['Firefox-Edge, VP9'] = [Input016, Input5, Input2];
 inputs['Firefox-Chrome, VP941231'] = [Input017, Input5, Input2];
 inputs['Firefox-Edge, VP8'] = [Input018, Input5, Input2];
 inputs['Nightly-Nightly, VP8'] = [Input019];*/

fs = require('fs');
dom = require('node-dom').dom;
window=dom(page,null,options); //global
document=window.document;

var bodyCSS = 'body { background-color: #EFEFEF;}';
var titleCSS = '.title-bar {width: 100%;height: 50px;background-color: #000;color: white;position:absolute; top:0;left:0;text-align:center;font-size: 36px;}';
var tableCSS = 'table {width: 100%;border: 3px solid grey; border-style: ridge; box-shadow: 5px 5px 3px #888888; padding: 10px; background-color: #000000;}';
var thCSS = 'th, td {border: 1px solid #737373; border-radius: 1px;}';
var resultsHeaderCSS = '.results-header {text-align: center;margin-bottom: 10px;color: white;font-size: 24px;border-bottom: 1px solid white;}';

var wrapper = '#wrapper { ' +
    'background-color: #cccccc;' +
    'width: 510px;' +
    'height: 510px;' +
    'margin-left: auto;' +
    'margin-right: auto; }';

var content = '.content { background-color: #77a4d4;' +
    'width: 150px;' +
    'height: 150px;' +
    'border: 5px solid #000000;' +
    'margin: 40px;' +
    'float: left; ' +
    'background : #77a4d4; }';

var wrapper2 = '#wrapper2 {' +
    'position: relative;' +
    'width: 72px;' +
    'padding: 4px;' +
    'border: 1px solid #9c2020;' +
    'margin-left: auto;' +
    'margin-right: auto;	}';

var td = 'td {' +
    'padding: 4px;' +
    'margin-left: auto;' +
    'margin-right: auto;	}';

var wrapper3 = '.wrapper3 {' +
    'margin: 2px;' +
    'cursor: pointer;' +
    'border: 1px solid #827979;' +
    'display: inline-block;' +
    'background : #f5f5f5;' +
    'min-width: 20px;' +
    'text-align: center; ' +
    'padding: 5px;' +
    'border-radius: 5px;' +
    'box-shadow: 2px 2px 2px #333c4e;}';

var container = '#container {' +
    'max-width: 800px;' +
    'width: 100%;' +
    'margin: 100px auto 20px auto; }';

var results = '#results {' +
    'max-width: 778px;' +
    'margin: 50px auto 100px auto;' +
    'padding: 10px;' +
    'border: 3px solid grey;' +
    'border-style: ridge;' +
    'box-shadow: 5px 5px px #888888;' +
    'background-color: #000000;' +
    'padding: 10px; }';

var logo = '.logo {' +
    'width: 50px;' +
    'height: 50px; }';

var hide = '.hide {display: none; }';

var style = document.createElement('style');
style.append(bodyCSS);
style.append(titleCSS);
style.append(tableCSS);
style.append(thCSS);
style.append(resultsHeaderCSS);
style.append(wrapper);
style.append(content);
style.append(wrapper2);
style.append(wrapper3);
style.append(td);
style.append(container);
style.append(results);
style.append(logo);
style.append(hide);
document.body.appendChild(style);

//create Title
var titleBar = document.createElement('div');
titleBar.className = 'title-bar';
titleBar.innerHTML = 'TITLE';
document.body.appendChild(titleBar);

//create Table
var containerTable = document.createElement('table');
var resultDivs = document.createElement('div');
containerTable.id = 'container';
resultDivs.id = 'results';
resultDivs.className = 'hide';
document.body.appendChild(containerTable);
document.body.appendChild(resultDivs);
//create Header line
var containerTR = document.createElement('tr');
containerTR.id = 'headers';
containerTable.appendChild(containerTR);

//create Results Header
var resultsHeader = document.createElement('div');
resultsHeader.id = 'resultsFor';
resultsHeader.className = 'results-header';
resultsHeader.innerHTML = 'RESULTS FOR: ';
resultDivs.appendChild(resultsHeader);
//create Results Header Text
var resultsHeaderText = document.createElement('span');
resultsHeaderText.id = 'resultsForText';
resultsHeader.appendChild(resultsHeaderText);

//add new empty column
var containerTD = document.createElement('td');
containerTR.appendChild(containerTD);

//add Headers
var intro = ['Chrome','Firefox','Edge', 'Nightly'];
intro.forEach(addHeaders);

//add Lines
intro.forEach(addLineHeaders);
addMatrixColumns(intro);

var inputs = {};

//read the unprocessed results
fs.readFile('roxana/output.txt', 'utf8', function (err,data) {
    if (err) {
        return console.log(err);
    }
    setInputs(data);
});

processResult(inputs);



function addHeaders(item) {

    var newColumn = document.createElement('th');

    var img = document.createElement('img');
    img.setAttribute('src', 'images/'+item.toLowerCase()+'.png');
    img.setAttribute('class', 'logo');
    newColumn.appendChild(img);

    var headerLine = document.getElementById('headers');
    headerLine.appendChild(newColumn);
}

function addLineHeaders(item) {

    var newLine = document.createElement('tr');
    newLine.id = item;
    var newColumn = document.createElement('td');
    var img = document.createElement('img');
    img.setAttribute('src', 'images/'+item.toLowerCase()+'.png');
    img.setAttribute('class', 'logo');
    newColumn.appendChild(img);

    newLine.appendChild(newColumn);

    var table = document.getElementById('container');
    table.appendChild(newLine);
}

var nameAttr = '';
function setnameAttr(value){
    nameAttr = value;
}

function setInputs(value){
    inputs = value;
}

function myFunction(item) {


    var split;
    var tagID;
    var resultChildContainerDiv = document.getElementById( id + '-result');

    var resultChildDiv;
    var newContent;

    var currentDIV = document.getElementById( id + '-container');
    var childDiv = document.createElement('div');




    if(item.type == 'test'){

        split = item.name.split('-');
        tagID = split[0].substring(0,1).toLowerCase() + '-' + split[1].substring(0,1).toLowerCase();
        setId(tagID);

        var name;
        if(item.name.indexOf(',') != -1) {
            name = item.name.substring(item.name.indexOf(',') + 1);
        }else {
            name = '-';
        }
        setnameAttr(name);
        currentDIV = document.getElementById( id + '-container');

        newContent = document.createTextNode(name);
        childDiv.appendChild(newContent);
        if(name == '-'){
            childDiv.setAttribute('name', id);
        }else{
            childDiv.setAttribute('name', name);
        }

        childDiv.className = 'wrapper3';

        var browserID = id;
        childDiv.onclick = function() {displayElement(name, browserID, item.name);};

        currentDIV.appendChild(childDiv);
        return;
    }else {
        if(resultChildContainerDiv == null) {
            resultChildContainerDiv = document.createElement('div');
            resultChildContainerDiv.id = ( id + '-result');
            resultDivs.appendChild(resultChildContainerDiv);
        }

        var testCaseContainerDiv =  document.getElementById( nameAttr + '-tcstep-' + id);
        if(testCaseContainerDiv == null){
            testCaseContainerDiv = document.createElement('div');
            testCaseContainerDiv.id = ( nameAttr + '-tcstep-' + id);
            testCaseContainerDiv.setAttribute('name', nameAttr + '-tcstep');
            testCaseContainerDiv.className = 'hide';
            resultChildContainerDiv.appendChild(testCaseContainerDiv);
        }

        resultChildDiv  = document.createElement('div');
        newContent = document.createTextNode(item.name);
        if (item.action == 'pass') {
            resultChildDiv.style.backgroundColor = 'green';
        } else {
            resultChildDiv.style.backgroundColor = '#E10000';
        }
        resultChildDiv.style.color = 'white';
        resultChildDiv.className = 'wrapper3';
        resultChildDiv.onclick = function() {console.log(item);};
        resultChildDiv.appendChild(newContent);
        testCaseContainerDiv.appendChild(resultChildDiv);
    }

}


var id;
function setId(value){
    id = value;
}

function processResult(list){
    var k;
    for ( k in Object.keys(list)) {
        list[Object.keys(list)[k]].forEach(myFunction);
    }
}

var currentDisplayedElement;
function displayElement(elementId, id, fullName){

    var idString = elementId + '-tcstep-' + id;

    var entireResultsDiv = document.getElementById('results');

    var resultsForText = document.getElementById('resultsForText');
    resultsForText.innerHTML = fullName;

    //if nothing was showing before, just show the new.
    if(typeof currentDisplayedElement === 'undefined' || currentDisplayedElement === ''){
        var divToDisplay = document.getElementById(idString);
        currentDisplayedElement = idString;
        divToDisplay.className = '';

        entireResultsDiv.className = '';
    }
    //this is already displayed, so hide it.
    else if(currentDisplayedElement === idString){
        var hideThis = document.getElementById(currentDisplayedElement);
        hideThis.className = 'hide';
        currentDisplayedElement = '';

        entireResultsDiv.className = 'hide';
    }
    //hide the old, show the new
    else{
        var hideThis = document.getElementById(currentDisplayedElement);
        hideThis.className = 'hide';
        currentDisplayedElement = '';

        var divToDisplay = document.getElementById(idString);
        currentDisplayedElement = idString;
        divToDisplay.className = '';

        entireResultsDiv.className = '';
    }

}

function addMatrixColumns(broswers){

    var  i, j, tagID, currentTR, currentTD, containerDIV;

    for ( i in Object.keys(broswers)) {
        for ( j in Object.keys(broswers)) {
            tagID = broswers[Object.keys(broswers)[i]].substring(0,1).toLowerCase() + '-' + broswers[Object.keys(broswers)[j]].substring(0,1).toLowerCase();
            currentTR = document.getElementById(broswers[i]);
            currentTD = document.createElement('td');
            currentTD.id = tagID;
            currentTR.appendChild(currentTD);

            containerDIV = document.createElement('div');
            containerDIV.id = tagID + '-container';
            containerDIV.className = 'wrapper2';
            currentTD.appendChild(containerDIV);
        }
    }
}


function getFormattedResult() {
    return new Promise(function ( resolve, reject){
        try {
        resolve(document);
        }
        catch(err) {
            reject("Error in promise" + err)
        }
    });
}

module.exports = getFormattedResult;