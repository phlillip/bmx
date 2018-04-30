/**
 * @Author: alcwynparker
 * @Date:   2017-12-07T22:56:21+00:00
 * @Last modified by:   alcwynparker
 * @Last modified time: 2017-12-11T18:50:08+00:00
 */
 // Initialize app
 var myApp = new Framework7();

 // If we need to use custom DOM library, let's save it to $$ variable:
 var $$ = Dom7;

 // Add view
 var mainView = myApp.addView('.view-main', {
   // Because we want to use dynamic navbar, we need to enable it for this view:
   dynamicNavbar: true
 });

 //About hooks
 myApp.onPageInit('about', function (page) {
  document.getElementById('zx').innerHTML += '<div class="loading"></div>';
 });

 //Timeline hooks
myApp.onPageInit('timeline', function (page) {
  document.getElementById('zx2').innerHTML += '<div class="loading"></div>';
});

//Track hooks

//Interferes with 3d
myApp.onPageInit('track', function (page) {
// document.getElementById('zx').innerHTML += '<div class="loading"></div>';
});

//Builder hooks
myApp.onPageInit('builder', function (page) {
//  document.getElementById('zx2').innerHTML += '<div class="loading"></div>';
});

//Rewards hooks
myApp.onPageInit('rewards', function (page) {
//  document.getElementById('zx2').innerHTML += '<div class="loading"></div>';
showColours();
});
