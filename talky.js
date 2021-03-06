/* Interop testing using apprtc.appspot.com using selenium
 * Copyright (c) 2016, Philipp Hancke
 */

const test = require('tape');
const fs = require('fs');
const os = require('os');
const webdriver = require('selenium-webdriver');
const buildDriver = require('./webdriver').buildDriver;

const TIMEOUT = 30000;

// in talky, each jingle session has a single peerconnection.
// but sessions are one-way because reasons.
function waitNPeerConnectionsExist(driver, n) {
    return driver.wait(function() {
        return driver.executeScript(function(n) {
            return Object.keys(app.xmpp.jingle.sessions).length === n;
        }, n);
    }, TIMEOUT);
}

function waitAllPeerConnectionsConnected(driver) {
    return driver.wait(function() {
        return driver.executeScript(function() {
            var sessions = app.xmpp.jingle.sessions;
            var states = [];
            Object.keys(sessions).forEach(function(sid) {
                var session = sessions[sid];
                if (session.pc && session.pc.pc) {
                    states.push(session.pc.pc.iceConnectionState);
                }
            });
            return states.length === states.filter((s) => s === 'connected' || s === 'completed').length;
        });
    }, TIMEOUT);
}

// talky shows one local video, one roster and one large video per person.
function waitNVideosExist(driver, n) {
    return driver.wait(function() {
        return driver.executeScript(function(n) {
            return document.querySelectorAll('video').length === n;
        }, n);
    }, TIMEOUT);
}

function waitAllVideosHaveEnoughData(driver) {
    return driver.wait(function() {
        return driver.executeScript(function() {
            var videos = document.querySelectorAll('video');
            var ready = 0;
            for (var i = 0; i < videos.length; i++) {
                if (videos[i].readyState >= videos[i].HAVE_ENOUGH_DATA) {
                    ready++;
                }
            }
            return ready === videos.length;
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
function interop(t, browserA, browserB) {
  var driverA = buildDriver(browserA);
  var driverB = buildDriver(browserB);

  var baseURL = 'https://talky.io/';
  var roomName = 'fippo-interop' + Math.random().toString(36).substr(2, 10);

  driverA.manage().timeouts().setScriptTimeout(TIMEOUT);

  return driverA.get(baseURL + roomName)
  .then(function() {
    return driverA.findElement(webdriver.By.id('join')).click();
  })
  .then(function() {
    return driverB.get(baseURL + roomName);
  })
  .then(function() {
    return driverB.findElement(webdriver.By.id('join')).click();
  })
  .then(function() {
    t.pass('joined room');
    return waitNPeerConnectionsExist(driverA, 2);
  })
  .then(function() {
    t.pass('peerconnections exist');
    return waitAllPeerConnectionsConnected(driverA);
  })
  .then(function() {
    t.pass('peerconnections connected or completed');
    return waitNVideosExist(driverA, 3);
  })
  .then(function() {
    t.pass('videos exist');
    return waitAllVideosHaveEnoughData(driverA);
  })
  .then(function() {
    t.pass('videos are in HAVE_ENOUGH_DATA state');
    return waitNVideosExist(driverB, 3);
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

test('Chrome-Chrome', function(t) {
  interop(t, 'chrome', 'chrome')
});

test('Firefox-Firefox', function(t) {
  interop(t, 'firefox', 'firefox')
});

test('Chrome-Firefox', function(t) {
  interop(t, 'chrome', 'firefox')
});

test('Firefox-Chrome', function(t) {
  interop(t, 'firefox', 'chrome')
});
