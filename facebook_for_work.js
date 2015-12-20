// ==UserScript==
// @name        facebook_forwork
// @include     https://www.facebook.*
// @version     1
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @grant       none
// ==/UserScript==
//----------------------- Global Variable ------------------------------------
var centre = 'contentArea';
var droit = 'rightCol';
var timeline = 'pagelet_ticker';
var taille_min_timeline = '2px';
var taille_max_timeline = '300px';
var keys = {
  33: 1,
  34: 1,
  37: 1,
  38: 1,
  39: 1,
  40: 1
};
var TEMPS = 2000;
var combi = 0;
//------------------------
var a = true;
var w = false;
var handler = false;
var url = document.location.toString();
// ----------------------- Function ------------------------------------------
var readyStateCheckInterval = setInterval(interval, TEMPS);
function interval() {
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
        expend();
      };
    }
    if (!a) limit();
    if (a) expend();
  }
}
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
var init = false;
$(document).on('keydown', function (e) {
  if (e.which == 9) {
    combi = combi + 1;
    if (combi == 2 && init == false)
    {
      init = true;
      combi = 0;
      if (!a) {
        expend();
        clearInterval(readyStateCheckInterval);
      }
      else if (a) {
        limit();
        clearInterval(readyStateCheckInterval);
      }
    } 
    else if ((combi == 2 && init == true))
    {
      init = false;
      combi = 0;
      if (!a) {
        limit();
        setInterval(interval, TEMPS);
      }
      else if (a) {
        expend();
        setInterval(interval, TEMPS);
      }
    }
    return;
  } 
  else
  {
    combi = 0;
  }
});
function limit()
{
  document.getElementById(timeline).style.height = taille_min_timeline;
  document.getElementById(centre).style.visibility = 'hidden';
  document.getElementById(droit).style.visibility = 'hidden';
  scrollStop();
}
function expend()
{
  ScrollOn();
  document.getElementById(timeline).style.height = taille_max_timeline;
  document.getElementById(centre).style.visibility = 'initial';
  document.getElementById(droit).style.visibility = 'initial';
}
$(window).on('hashChange', function () {
 // clearInterval(readyStateCheckInterval);
  //setInterval(interval, TEMPS);
}).trigger('hashChange');

