'use strict';
// I will build objects using the min customers, max customer and average cookie sales.
//This will be done using the locations as variables
//This function is to caluclate the avg and times of the cookie sales.

//Global Var
var storeContainerUlEl;
var liEl;
var liElTotal;
var h2El;
var ImageURL;
var parentImageURL;
//Image DOM manipulation
//1.
parentImageURL = document.getElementById('parentImage');
//2.
ImageURL = document.createElement('img');
//3.
ImageURL.src = 'https://raw.githubusercontent.com/codefellows/seattle-201d57/master/class-06/lab/assets/salmon.png';
//4.
parentImageURL.appendChild(ImageURL);

var Store = function(locationName,minCustomer,maxCustomer,avgCookie, cookiesBoughtArr){
  this.locationName = locationName;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookie = avgCookie;
  this.cooikesBoughtArr = cookiesBoughtArr;
};
var firstAndPike = new Store('1st and Pike',23,65,6.3,[]);
var seaTac = new Store('SeaTac Airport',3,24,1.2,[]);
var seattleCenter = new Store('Seattle Center',11,38,3.7,[]);
var capitolHill = new Store('Capitol Hill',20,38,2.3,[]);
var alki = new Store('Alki',2,16,4.6,[]);
var storeArray = [];
storeArray. push(firstAndPike);
storeArray. push(seaTac);
storeArray. push(seattleCenter);
storeArray. push(capitolHill);
storeArray. push(alki);
Store.prototype.randomCustomer = function (){return Math.floor(Math.random()* (this.maxCustomer-this.minCustomer))+ this.minCustomer;};
Store.prototype.addingToDOM = function(cooikesBoughtArr, storeName){
  //This will add the location name to a H2
  h2El = document.createElement('h2');
  h2El.textContent = storeName;
  //This is getting the container the stores will be in.
  storeContainerUlEl = document.getElementById(storeName);
  storeContainerUlEl.appendChild(h2El);
  //This is a loop to display the information on the page.
  for(var i = 0; i< 15;i++ ){
    //This is creating the li element dynamic
    liEl = document.createElement('li');
    console.log(cooikesBoughtArr[0]);
    liEl.textContent = cooikesBoughtArr[0][i];
    storeContainerUlEl.appendChild(liEl);
  }
  //This will add the total at the bottom
  liElTotal = document.createElement('li');
  liElTotal.textContent = 'Total '+cooikesBoughtArr[1]+' cookies';
  storeContainerUlEl.appendChild(liElTotal);
};
this.randomCustomerPike = function(randomCustomer,cooikesBoughtArr,avgCookie){
  var totalCookies = 0;
  cooikesBoughtArr = [];
  var multipliedSales = 0;
  for(var i = 6; i < 12; i++){
    multipliedSales= randomCustomer()* avgCookie;
    cooikesBoughtArr.push(i+'am: '+Math.floor(multipliedSales)+' cookies');
    totalCookies = totalCookies + multipliedSales;
  }
  for(var j = 0; j <=8;j++){
    multipliedSales = randomCustomer * avgCookie;
    if(j !== 0){
      multipliedSales= randomCustomer()* avgCookie;
      cooikesBoughtArr.push(j+'am: '+Math.floor(multipliedSales)+' cookies');
      totalCookies = totalCookies + multipliedSales;
    }
    else{
      j = 12;
      multipliedSales= randomCustomer()* avgCookie;
      cooikesBoughtArr.push(j+'am: '+Math.floor(multipliedSales)+' cookies');
      totalCookies = totalCookies + multipliedSales;
      j = 0;
    }
    console.log(totalCookies);
  }
  return[cooikesBoughtArr,Math.floor(totalCookies)];
};
Store.prototype.randomCustomer = function (){return Math.floor(Math.random()* (this.maxCustomer-this.minCustomer))+ this.minCustomer;};


firstAndPike.cooikesBoughtArr.push(firstAndPike.randomCustomer());
console.log(firstAndPike.cooikesBoughtArr);
console.log(storeArray);

//These are the objects for the public store fronts.
// var firstAndPike = {
//   locationName: '1st and Pike',
//   minCustomer: 23,
//   maxCustomer: 65,
//   avgCookieSale: 6.3,
//   pikeCooikesBoughtArr : [],
//   randomCustomer : function (){return Math.floor(Math.random()* (firstAndPike.maxCustomer-firstAndPike.minCustomer))+ firstAndPike.minCustomer;}
// };
// var seatacAirport = {
//   locationName: 'SeaTac Airport',
//   minCustomer: 3,
//   maxCustomer: 24,
//   avgCookieSale: 1.2,
//   seatacCooikesBoughtArr : [],
//   randomCustomer : function (){return Math.floor(Math.random()* (seatacAirport.maxCustomer-seatacAirport.minCustomer))+ seatacAirport.minCustomer;}
// };
// var seattleCenter = {
//   locationName: 'Seattle Center',
//   minCustomer: 11,
//   maxCustomer: 38,
//   avgCookieSale: 3.7,
//   seaCenterCooikesBoughtArr : [],
//   randomCustomer : function (){return Math.floor(Math.random()* (seattleCenter.maxCustomer-seattleCenter.minCustomer))+ seattleCenter.minCustomer;}
// };
// var capitolHill = {
//   locationName: 'Capitol Hill',
//   minCustomer: 20,
//   maxCustomer: 38,
//   avgCookieSale: 2.3,
//   capHillCooikesBoughtArr : [],
//   randomCustomer : function (){return Math.floor(Math.random()* (capitolHill.maxCustomer-capitolHill.minCustomer))+ capitolHill.minCustomer;}
// };
// var alki = {
//   locationName: 'Alki',
//   minCustomer: 2,
//   maxCustomer: 16,
//   avgCookieSale: 4.6,
//   alkiCooikesBoughtArr : [],
//   randomCustomer : function (){return Math.floor(Math.random()* (alki.maxCustomer-alki.minCustomer))+ alki.minCustomer;}
// };

// This is the randomCustomer function. This will get a random amount of customers every hour and multiply them by the average amount of cookies brought.
// var randomCustomerPike = function(randomCustomer,cooikesBoughtArr,avgCookie){
//   var totalCookies = 0;
//   cooikesBoughtArr = [];
//   var multipliedSales = 0;
//   for(var i = 6; i < 12; i++){
//     multipliedSales= randomCustomer()* avgCookie;
//     cooikesBoughtArr.push(i+'am: '+Math.floor(multipliedSales)+' cookies');
//     totalCookies = totalCookies + multipliedSales;
//   }
//   for(var j = 0; j <=8;j++){
//     multipliedSales = randomCustomer * avgCookie;
//     if(j !== 0){
//       multipliedSales= randomCustomer()* avgCookie;
//       cooikesBoughtArr.push(j+'am: '+Math.floor(multipliedSales)+' cookies');
//       totalCookies = totalCookies + multipliedSales;
//     }
//     else{
//       j = 12;
//       multipliedSales= randomCustomer()* avgCookie;
//       cooikesBoughtArr.push(j+'am: '+Math.floor(multipliedSales)+' cookies');
//       totalCookies = totalCookies + multipliedSales;
//       j = 0;
//     }
//     console.log(totalCookies);
//   }
//   return[cooikesBoughtArr,Math.floor(totalCookies)];
// };
// //This is a function to loop through while adding store front info to the DOM dynamically
// var addingToDOM = function(cooikesBoughtArr, storeName){
//   //This will add the location name to a H2
//   h2El = document.createElement('h2');
//   h2El.textContent = storeName;
//   //This is getting the container the stores will be in.
//   storeContainerUlEl = document.getElementById(storeName);
//   storeContainerUlEl.appendChild(h2El);
//   //This is a loop to display the information on the page.
//   for(var i = 0; i< 15;i++ ){
//     //This is creating the li element dynamic
//     liEl = document.createElement('li');
//     console.log(cooikesBoughtArr[0]);
//     liEl.textContent = cooikesBoughtArr[0][i];
//     storeContainerUlEl.appendChild(liEl);
//   }
//   //This will add the total at the bottom
//   liElTotal = document.createElement('li');
//   liElTotal.textContent = 'Total '+cooikesBoughtArr[1]+' cookies';
//   storeContainerUlEl.appendChild(liElTotal);

// };
//This is adding all the store fronts to the DOM dynamically
// firstAndPike.pikeCooikesBoughtArr = randomCustomerPike(firstAndPike.randomCustomer,firstAndPike.pikeCooikesBoughtArr, firstAndPike.avgCookieSale);
// addingToDOM(firstAndPike.pikeCooikesBoughtArr,firstAndPike.locationName);

// seatacAirport.seatacCooikesBoughtArr = randomCustomerPike(seatacAirport.randomCustomer,seatacAirport.seatacCooikesBoughtArr, seatacAirport.avgCookieSale);
// addingToDOM(seatacAirport.seatacCooikesBoughtArr,seatacAirport.locationName);

// seattleCenter.seaCenterCooikesBoughtArr = randomCustomerPike(seattleCenter.randomCustomer,seattleCenter.seaCenterCooikesBoughtArr, seattleCenter.avgCookieSale);
// addingToDOM(seattleCenter.seaCenterCooikesBoughtArr,seattleCenter.locationName);

// capitolHill.capHillCooikesBoughtArr = randomCustomerPike(capitolHill.randomCustomer,capitolHill.capHillCooikesBoughtArr, capitolHill.avgCookieSale);
// addingToDOM(capitolHill.capHillCooikesBoughtArr,capitolHill.locationName);

// alki.alkiCooikesBoughtArr = randomCustomerPike(alki.randomCustomer,alki.alkiCooikesBoughtArr, alki.avgCookieSale);
// addingToDOM(alki.alkiCooikesBoughtArr,alki.locationName);


