/* 

-- Copyright (C) Fallen-Network, Inc - All Rights Reserved
-- Unauthorized copying of this file, via any medium is strictly prohibited
-- Proprietary and confidential
-- Written by Damien <https://github.com/Damien111>, November 2020

*/

document.onkeypress = function(event) {
    event = (event || window.event);
    if (event.keyCode == 123) {
      //alert('No F-12');
      return false;
    }
}
document.onmousedown = function(event) {
    event = (event || window.event);
    if (event.keyCode == 123) {
        //alert('No F-keys');
        return false;
    }
}
document.onkeydown = function(event) {
    event = (event || window.event);
    if (event.keyCode == 123) {
        //alert('No F-keys');
        return false;
    }
}
var message = ":o";

function clickIE() {
    if (document.all) {
        (message);
        return false;
    }
}

function clickNS(e) {
    if (document.layers || (document.getElementById && !document.all)) {
        if (e.which == 2 || e.which == 3) {
            (message);
            return false;
        }
    }
}
if (document.layers) {
    document.captureEvents(Event.MOUSEDOWN);
    document.onmousedown = clickNS;
} else {
    document.onmouseup = clickNS;
    document.oncontextmenu = clickIE;
}
document.oncontextmenu = new Function("return false")

function disableCtrlKeyCombination(e) {
    var forbiddenKeys = new Array('a', 'n', 'c', 'x', 'v', 'j', 'w');
    var key;
    var isCtrl;
    if (window.event) {
        key = window.event.keyCode;
        if (window.event.ctrlKey)
            isCtrl = true;
        else
            isCtrl = false;
    } else {
        key = e.which;
        if (e.ctrlKey)
            isCtrl = true;
        else
            isCtrl = false;
    }
    if (isCtrl) {
        for (i = 0; i <
            forbiddenKeys.length; i++) {
            if (forbiddenKeys[i].toLowerCase() == String.fromCharCode(key).toLowerCase()) {
                alert('Key combination CTRL + ' + String.fromCharCode(key) + ' has been disabled.');
                return false;
            }
        }
    }
    return true;
}

document.onkeydown = function(e) {
  if(event.keyCode == 123) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
     return false;
  }
}