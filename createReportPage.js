
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
    'position: relative;' +
    'width: 72px;' +
    'padding: 4px;' +
	'border: 1px solid #9c2020;' +
	'margin-left: auto;' +
    'margin-right: auto;	}';

var wrapper3 = '#wrapper3 {' +
    'width: 12px;' +
    'height: 12px;' +
    'margin: 2px;' +
	'position: relative;' +
	'border: 1px solid #827979;' +
    'display: inline-block;' +
	'background : #827979;' +
    'font-size: 6px; }';

var style = document.createElement('style');
style.append(wrapper);
style.append(content);
style.append(wrapper2);
style.append(wrapper3);
//style.append(td);
document.body.appendChild(style);


//create Table
var containerTable = document.createElement('table');
var resultDivs = document.createElement('div');
containerTable.id = 'container';
resultDivs.id = 'results';
document.body.appendChild(containerTable);
document.body.appendChild(resultDivs);
//create Header line
var containerTR = document.createElement('tr');
containerTR.id = 'headers';
containerTable.appendChild(containerTR);

//add new empty column
var containerTD = document.createElement('td');
containerTR.appendChild(containerTD);

//add Headers 
var intro = ['Chrome','Firefox','Edge'];
intro.forEach(addHeaders);

//add Lines
intro.forEach(addLineHeaders);
addMatrixColumns(intro);





//add test results
var Input = {'name':'page loaded',
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

var inputs = {};
inputs['Chrome-Chrome'] = [Input01, Input, Input2, Input3, Input4, Input5];
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

processResult(inputs);



function addHeaders(item, index) {

	var newColumn = document.createElement('th');
    var tex = document.createTextNode(item);
	newColumn.appendChild(tex);

	var headerLine = document.getElementById('headers');
	headerLine.appendChild(newColumn);	
}

function addLineHeaders(item, index) {

	var newLine = document.createElement('tr');
	newLine.id = item;
	var newColumn = document.createElement('td');
    var tex = document.createTextNode(item);
	newColumn.appendChild(tex);

	newLine.appendChild(newColumn);
	
	var table = document.getElementById('container');
	table.appendChild(newLine);	
}


function myFunction(item) {


    var split;
    var tagID;
    var resultChildContainerDiv = document.getElementById( id + '-result');
    var resultChilDiv;
    var newContent;

    var currentDIV = document.getElementById( id + '-container');
    var childDiv = document.createElement('div');




    if(item.type == 'test'){

        split = item.name.split('-');
        tagID = split[0].substring(0,1).toLowerCase() + '-' + split[1].substring(0,1).toLowerCase();
        setId(tagID);

        currentDIV = document.getElementById( id + '-container');

        newContent = document.createTextNode(item.name);
        childDiv.appendChild(newContent);
        childDiv.id = 'wrapper3';
        currentDIV.appendChild(childDiv);
        return;
    }else {
        if(resultChildContainerDiv == null) {
            resultChildContainerDiv = document.createElement('div');
            resultChildContainerDiv.id = ( id + '-result');
            resultDivs.appendChild(resultChildContainerDiv);
        }

        resultChilDiv  = document.createElement('div');
        newContent = document.createTextNode(item.name);
        if (item.action == 'pass') {
            resultChilDiv.style.backgroundColor = 'green';
        } else {
            resultChilDiv.style.backgroundColor = 'red';
        }
        resultChilDiv.id = 'wrapper3';
        resultChilDiv.appendChild(newContent);
        resultChildContainerDiv.appendChild(resultChilDiv);
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




