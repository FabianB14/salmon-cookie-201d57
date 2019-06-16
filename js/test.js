'use strict';

var ImageURL;
var parentImageURL;

var imageArr = ['https://raw.githubusercontent.com/codefellows/seattle-201d57/master/class-09/lab-b/assets/chinook.jpg','https://raw.githubusercontent.com/codefellows/seattle-201d57/master/class-09/lab-b/assets/salmon.png','https://raw.githubusercontent.com/codefellows/seattle-201d57/master/class-09/lab-b/assets/shirt.jpg'];

var imageDisplay = function(imageArr){

  for(var i = 0; i < imageArr.length; i++){
    //Image DOM manipulation
    //1.
    parentImageURL = document.getElementById('parentImage');
    //2.
    ImageURL = document.createElement('img');
    //3.
    ImageURL.src =imageArr[i];
    //4.
    parentImageURL.appendChild(ImageURL);

    ImageURL.setAttribute('id', 'gallery');

  }
};

imageDisplay(imageArr);

