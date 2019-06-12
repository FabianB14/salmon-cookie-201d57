'use strict';

var newH1 = document.getElementById('new h1');
var doWhatIwant = function(){
  newH1.className = 'red';
};

document.addEventListener('click', doWhatIwant);
