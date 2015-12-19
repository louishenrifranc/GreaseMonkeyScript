// ==UserScript==
// @name        facebook_forwork
// @include     https://www.facebook.*
// @version     1
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @grant       none
// ==/UserScript==
var a = true;
var w = false;
var readyStateCheckInterval = setInterval(function () {
  if (document.readyState === 'complete') {
    if (!w) {
      if (window.location.href.indexOf('groups') > - 1 || window.location.href.indexOf('message') > - 1)
      {
        a = true;
      } 
      else
      {
        a = false;
      }
    }
    if (!a) {
      document.onclick = function () {
        if (document.getElementById('pagelet_ticker').style.height == '2px')
        document.getElementById('pagelet_ticker').style.height = '300px';
        if (document.getElementById('contentArea').style.visibility == 'hidden')
        document.getElementById('contentArea').style.visibility = 'initial'
      };
    }
    if (!a && document.getElementById('pagelet_ticker').style.height != '2px') document.getElementById('pagelet_ticker').style.height = '2px';
    if (!a && document.getElementById('contentArea').style.visibility != 'hidden') document.getElementById('contentArea').style.visibility = 'hidden';
    if (!a && document.getElementById('rightCol').style.visibility != 'hidden') document.getElementById('rightCol').style.visibility = 'hidden';
    if (!a) scrollStop();
    if (a && document.getElementById('pagelet_ticker').style.height == '2px') document.getElementById('pagelet_ticker').style.height = '100px';
    if (a && document.getElementById('contentArea').style.visibility == 'hidden') document.getElementById('contentArea').style.visibility = 'initial';
    if (a && document.getElementById('rightCol').style.visibility == 'hidden') document.getElementById('rightCol').style.visibility = 'initial';
    if (a) ScrollOn();
  }
}, 1500);
var keys = {
  37: 1,
  38: 1,
  39: 1,
  40: 1
};
function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
  e.preventDefault();
  e.returnValue = false;
}
function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}
function scrollStop() {
  if (window.addEventListener) 
  window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; 
  window.onmousewheel = document.onmousewheel = preventDefault; 
  window.ontouchmove = preventDefault; 
  document.onkeydown = preventDefaultForScrollKeys;
}
function ScrollOn() {
  if (window.removeEventListener)
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.onmousewheel = document.onmousewheel = null;
  window.onwheel = null;
  window.ontouchmove = null;
  document.onkeydown = null;
}
function KeyPress(e) {
  e = e || window.event;
  if ((e.which == 89 || e.keyCode == 89) && e.ctrlKey) {
    alert('la')
  }
}
$(document).keydown(function (e) {
  if (e.which === 89 && e.ctrlKey) {
    if (!a) a = true;
     else if (a) a = false;
    w = true;
  }
});

