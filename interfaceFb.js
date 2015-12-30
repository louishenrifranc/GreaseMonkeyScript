// ==UserScript==
// @name         theme Facebook
// @namespace    http://your.homepage/
// @version      1.0
// @description  Changes your Facebook theme
// @author       LHF
// @match        https://www.facebook.com/*
// @grant        none
// ==/UserScript==

  // change & improve a code of DarkAshelin

var sheet = (function () {
  // Create the <style> tag
  var style = document.createElement('style');
  // Add the <style> element to the page
  document.head.appendChild(style);
  return style.sheet;
}) ();

// Font main color
sheet.insertRule('#globalContainer a, .fbReminders .fbRemindersStory .fbRemindersTitle { color: #24633F ; }', 0);
// Filter the picture
sheet.insertRule('img, ._ox1 {  filter: grayscale(1); opacity: 0.6; }', 0);
sheet.insertRule('.notifCentered a.jewelButton, #privacyFlyoutLabel, #userNavigationLabel { -webkit-filter: grayscale(1) brightness(10); filter: grayscale(1) brightness(10); }', 0);
// Bandeau bleu
sheet.insertRule('#blueBarNAXAnchor, ._5q5b .fbNubFlyoutTitlebar, ._50mz.focusedTab .titlebar   { background: black; color: green; border-radius: 0; }', 0);
sheet.insertRule('#_1dsp _42jz,  ._51sy  { background: black;  }', 0);
// Button notif/message/adds
sheet.insertRule('#fbNotificationsJewel,  ._2gyk { background: #24633F;  padding-bottom: 10px; border-bottom: 4px solid #24633F; margin-bottom: 10px;  border-radius: 0px 0px 5px 5px;  }', 0);
// Messenger color
sheet.insertRule(' .titlebarLabel { background: black;   }', 0);
sheet.insertRule('.fbNubFlyout { background: white;border-radius: 0; margin-bottom: 10px; border-radius: 100; padding-bottom: 100px; border-bottom: 100px solid}', 0);
// Bakcground side color
sheet.insertRule('._539- .uiTypeahead .wrap, ._5vb_, ._5vb_   #contentCol, ._5vb_ ._5pr2.fbChatSidebar { background: white; }', 0);
// Font color for left menu, and remove useless shortcut (application...)
sheet.insertRule('#userNav, #interestsNav, #appsNav, #pagesNav, #eventsNav, #listsNav { display: none }', 0);
// for title in left side
sheet.insertRule('.sectionDragHandle {  font-size: 130%; color: #24633F;    font-weight: bold;font-variant: small-caps;        text-decoration:underline; }', 0);
// Show only first element in left sidebar
sheet.insertRule('._bui li:nth-of-type(1n+5) {display: none;} ', 0);

// Hide right part
document.getElementById('rightCol').style.visibility = 'hidden';
sheet.insertRule('#pagelet_composer {display: none;}', 0);

// Hide line for publication enter
sheet.insertRule('._4-u2 { border: none; margin-bottom: 40px; border-radius: 0; padding-bottom: 50px; border-bottom: 1px solid #e5e5e5 }', 0);

sheet.insertRule('._5t35 { color: #f90; }', 0);
sheet.insertRule('.sp_0rbmCVMKg1X { background: #f90; border-radius: 50%; width: 7px; height: 7px; }', 0);
sheet.insertRule('.sp_0rbmCVMKg1X.sx_769d0b { width: 0px; height: 7px; }', 0);
sheet.insertRule('._1nc6 ._5w1r, ._1nc7 ._5w1r { background: none; ; border: none; margin: 0; padding: 0; width: 100% !important; max-width: none !important; -webkit-box-shadow: none; box-shadow: none; }', 0);
sheet.insertRule('._5wd4._1nc6 { background: #e0eaf1; }', 0);
sheet.insertRule('._5wd4._1nc6, ._5wd4._1nc6 { margin: 0; padding: 0px; }', 0);
sheet.insertRule('._1nc6 ._5wd9, ._1nc6 ._5wd4, ._1nc7 ._5wd9, ._1nc7 ._5wd4 { margin: 0; padding: 0; }', 0);
sheet.insertRule('._50mz .fbNubFlyoutInner { border-radius: 0; }', 0);
sheet.insertRule('.fbDockChatTabFlyout .fbNubFlyoutBody { background: #f6f7f8; }', 0);
sheet.insertRule('._5w-6 { background: none; }', 0);
sheet.insertRule('._1nc7 ._5wd9 { min-height: 0; }', 0);
sheet.insertRule('._4-u2.mvm._495i { padding: 0px; }', 0);
sheet.insertRule('#pagelet_composer ._4-u2.mbm { padding: 0; margin-bottom: 0; }', 0);
