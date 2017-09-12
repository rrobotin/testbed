/* Interop testing using apprtc.appspot.com using selenium
 * Copyright (c) 2016, Philipp Hancke
 */
const tape = require('tape');
const fs = require('fs');
const webdriver = require('selenium-webdriver');
const buildDriver = require('./webdriver').buildDriver;

const TIMEOUT = 30000;


//<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>
var result;
function addResult(row){
    result = {
        name: row.name,
        id: row.id,
        action: row.operator,
        status: row.ok,
        type: row.type
    };



    if(row.type == 'end'){
        console.log('Test End!');
        return;
    }if(row.type == 'test'){
        var asserts = new Array();
        asserts.push(result);
        listOfObjects[row.name] = asserts;
    }else{
        listOfObjects[Object.keys(listOfObjects)[Object.keys(listOfObjects).length - 1]]
            .push(result);
    }
    return listOfObjects;
}

var listOfObjects = {};
var list  = {};

tape.createStream({ objectMode: true }).on('data', function (row) {
    console.log('CREATE STREAM');
    addResult(row);
})

function setList(x) {
    list = x;
}
//<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>










// in apprtc this step is moot since it creates the PC
// even if there is no other client.
function waitNPeerConnectionsExist(driver) {
    return driver.wait(function() {
        return driver.executeScript(function() {
            return appController && appController.call_ && appController.call_.pcClient_ && appController.call_.pcClient_.pc_;
        });
    }, TIMEOUT);
}

function waitAllPeerConnectionsConnected(driver) {
    return driver.wait(function() {
        return driver.executeScript(function() {
            var state = appController.call_.pcClient_.pc_.iceConnectionState;
            return state === 'connected' || state === 'completed';
        });
    }, TIMEOUT);
}

// moot since apprtc always used three videos
function waitNVideosExist(driver) {
    return driver.wait(function() {
        return driver.executeScript(function() {
            return document.querySelectorAll('video').length === 3;
        }, n);
    }, TIMEOUT);
}

// apprtc uses remote-video
function waitAllVideosHaveEnoughData(driver) {
    return driver.wait(function() {
        return driver.executeScript(function() {
            var video = document.querySelector('#remote-video');
            return video.readyState >= video.HAVE_ENOUGH_DATA;
        });
    }, TIMEOUT);
}

// Edge Webdriver resolves quit slightly too early, wait a bit.
function maybeWaitForEdge(browserA, browserB) {
    if (browserA === 'MicrosoftEdge' || browserB === 'MicrosoftEdge') {
        return new Promise(function(resolve) {
            setTimeout(resolve, 2000);
        });
    }
    return Promise.resolve();
}

// Helper function for basic interop test.
// see https://apprtc.appspot.com/params.html for queryString options (outdated...)
function interop(t, browserA, browserB, queryString) {
  var driverA = buildDriver(browserA, {h264: true});
  var driverB;

  var baseURL = 'https://appr.tc/';

  return driverA.get(baseURL + (queryString || ''))
  .then(function() {
    t.pass('page loaded');
    return driverA.findElement(webdriver.By.id('join-button')).click();
  })
  .then(function() {
    // wait for URL to change to /r/some-id
    return driverA.wait(function() {
      return driverA.getCurrentUrl()
          .then(function(url) {
            return url.indexOf(baseURL + 'r/') === 0;
          });
    }, 10000, 'Did not join room for 10s');
  })
  .then(function() {
    t.pass('joined room');
    return driverA.getCurrentUrl();
  })
  .then(function(url) {
    //
    driverB = buildDriver(browserB, {h264: true});
    return driverB.get(url);
  })
  .then(function() {
    return driverB.findElement(webdriver.By.id('confirm-join-button')).click();
  })
  .then(function() {
    t.pass('second browser joined');
    // Show the info box.
    //return driverA.executeScript('appController.infoBox_.showInfoDiv();');
  })
  .then(function() {
    return waitNPeerConnectionsExist(driverA);
  })
  .then(function() {
    return waitNPeerConnectionsExist(driverB);
  })
  .then(function() {
    return waitAllPeerConnectionsConnected(driverA);
  })
  .then(function() {
    return waitAllPeerConnectionsConnected(driverB);
  })
  .then(function() {
    t.pass('videos exist');
    return waitAllVideosHaveEnoughData(driverA);
  })
  .then(function() {
    t.pass('videos exist');
    return waitAllVideosHaveEnoughData(driverB);
  })
  .then(function() {
    t.pass('videos are in HAVE_ENOUGH_DATA state');
  })
  .then(function() {
    return Promise.all([driverA.quit(), driverB.quit()])
  })
  .then(function() {
    return maybeWaitForEdge(browserA, browserB);
  })
  .then(function() {
    t.end();
  });
}

tape('Chrome-Chrome', function(t) {
  interop(t, 'chrome', 'chrome')
});

/*tape('Chrome-Firefox', function(t) {
  interop(t, 'chrome', 'firefox')
});

tape('Chrome-Firefox', function(t) {
 ('Firefox-Chrome', function(t) {
  interop(t, 'firefox', 'chrome')
});

 tape('Chrome-Firefox', function(t) {
('Firefox-Firefox', function(t) {
  interop(t, 'firefox', 'firefox')
});*/

// unclear how to evaluate audio-only
/*
test('Chrome-Chrome, audio-only', function(t) {
  interop(t, 'chrome', 'chrome', '?audio=true&video=false')
});
*/

tape('Chrome-Chrome, icetransports=relay', function(t) {
  interop(t, 'chrome', 'chrome', '?it=relay')
});

/*tape('Firefox-Firefox, H264', function(t) {
  interop(t, 'firefox', 'firefox', '?vsc=H264&vrc=H264')
});*/

tape('Chrome-Chrome, H264', function(t) {
  interop(t, 'chrome', 'chrome', '?vsc=H264&vrc=H264')
});

/*tape('Chrome-Firefox, H264', function(t) {
  interop(t, 'chrome', 'firefox', '?vsc=H264&vrc=H264')
});

tape('Firefox-Chrome, H264', function(t) {
  interop(t, 'firefox', 'chrome', '?vsc=H264&vrc=H264')
});*/

tape('Chrome-Chrome, VP8', function(t) {
  interop(t, 'chrome', 'chrome', '?vsc=VP8&vrc=VP8')
});

tape('Chrome-Chrome, VP9', function(t) {
  interop(t, 'chrome', 'chrome', '?vsc=VP9&vrc=VP9')
});

/*tape('Firefox-Firefox, VP9', function(t) {
  interop(t, 'firefox', 'firefox', '?vsc=VP9&vrc=VP9')
});

tape('Chrome-Firefox, VP9', function(t) {
  interop(t, 'chrome', 'firefox', '?vsc=VP9&vrc=VP9')
});

tape('Firefox-Chrome, VP9', function(t) {
  interop(t, 'firefox', 'chrome', '?vsc=VP9&vrc=VP9')
});*/



function getTheFinalList() {
    return new Promise(function ( resolve, reject){
        try {
            console.log('ON START TRY');

            tape.onFinish(
                () => {
                console.log('ON FINISH');
            setList(listOfObjects);
            resolve(list);
        });
            console.log('ON END TRY');
        }
        catch(err) {
            reject("Error in promise" +err)
        }
    });
}

module.exports = getTheFinalList;