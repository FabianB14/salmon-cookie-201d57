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

parentImageURL = document.getElementById('parentImage');
ImageURL = document.createElement('img');
ImageURL.src = 'https://raw.githubusercontent.com/codefellows/seattle-201d57/master/class-06/lab/assets/salmon.png';
parentImageURL.appendChild(ImageURL);



//These are the objects for the public store fronts.
var firstAndPike = {
  locationName: '1st and Pike',
  minCustomer: 23,
  maxCustomer: 65,
  avgCookieSale: 6.3,
  pikeCooikesBoughtArr : [],
  randomCustomer : function (){return Math.ceil(Math.random()* (firstAndPike.minCustomer-firstAndPike.maxCustomer))+ firstAndPike.minCustomer * firstAndPike.avgCookieSale;}
};
var seatacAirport = {
  locationName: 'SeaTac Airport',
  minCustomer: 3,
  maxCustomer: 24,
  avgCookieSale: 1.2,
  seatacCooikesBoughtArr : [],
  randomCustomer : function (){return Math.ceil(Math.random()* (seatacAirport.minCustomer-seatacAirport.maxCustomer))+ seatacAirport.minCustomer * seatacAirport.avgCookieSale;}
};
var seattleCenter = {
  locationName: 'Seattle Center',
  minCustomer: 11,
  maxCustomer: 38,
  avgCookieSale: 3.7,
  seaCenterCooikesBoughtArr : [],
  randomCustomer : function (){return Math.ceil(Math.random()* (seattleCenter.minCustomer-seattleCenter.maxCustomer))+ seattleCenter.minCustomer * seattleCenter.avgCookieSale;}
};
var capitolHill = {
  locationName: 'Capitol Hill',
  minCustomer: 20,
  maxCustomer: 38,
  avgCookieSale: 2.3,
  capHillCooikesBoughtArr : [],
  randomCustomer : function (){return Math.ceil(Math.random()* (capitolHill.minCustomer-capitolHill.maxCustomer))+ capitolHill.minCustomer * capitolHill.avgCookieSale;}
};
var alki = {
  locationName: 'Alki',
  minCustomer: 2,
  maxCustomer: 16,
  avgCookieSale: 4.6,
  alkiCooikesBoughtArr : [],
  randomCustomer : function (){return Math.ceil(Math.random()* (alki.minCustomer-alki.maxCustomer))+ alki.minCustomer * alki.avgCookieSale;}
};

// This is the randomCustomer function. This will get a random amount of customers every hour and multiply them by the average amount of cookies brought.
var randomCustomerPike = function(randomCustomer,cooikesBoughtArr){
  var totalCookies = 0;
  cooikesBoughtArr = [];
  for(var i = 6; i < 12; i++){
    randomCustomer = Math.floor(Math.random()* (firstAndPike.minCustomer-firstAndPike.maxCustomer))+ firstAndPike.minCustomer * firstAndPike.avgCookieSale;
    console.log(randomCustomer);
    cooikesBoughtArr.push(i+'am: '+ randomCustomer+' cookies');
    totalCookies = totalCookies + randomCustomer;
  }
  for(var j = 0; j <=8;j++){
    randomCustomer = Math.floor(Math.random()* (firstAndPike.minCustomer-firstAndPike.maxCustomer))+ firstAndPike.minCustomer * firstAndPike.avgCookieSale;
    if(j !== 0){
      cooikesBoughtArr.push(j+'pm: '+ randomCustomer+' cookies');
      totalCookies = totalCookies + randomCustomer;
    }
    else{
      j = 12;
      cooikesBoughtArr.push(i+'pm: '+ randomCustomer+' cookies');
      totalCookies = totalCookies + randomCustomer;
      j = 0;
    }
    console.log(totalCookies);
  }
  return[cooikesBoughtArr,totalCookies];
};
//This is a function to loop through while adding store front info to the DOM dynamically
var addingToDOM = function(cooikesBoughtArr, storeName){
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
//This is adding all the store fronts to the DOM dynamically
firstAndPike.pikeCooikesBoughtArr = randomCustomerPike(firstAndPike.randomCustomer,firstAndPike.pikeCooikesBoughtArr);
addingToDOM(firstAndPike.pikeCooikesBoughtArr,firstAndPike.locationName);

seatacAirport.seatacCooikesBoughtArr = randomCustomerPike(seatacAirport.randomCustomer,seatacAirport.seatacCooikesBoughtArr);
addingToDOM(seatacAirport.seatacCooikesBoughtArr,seatacAirport.locationName);

seattleCenter.seaCenterCooikesBoughtArr = randomCustomerPike(seattleCenter.randomCustomer,seattleCenter.seaCenterCooikesBoughtArr);
addingToDOM(seattleCenter.seaCenterCooikesBoughtArr,seattleCenter.locationName);

capitolHill.capHillCooikesBoughtArr = randomCustomerPike(capitolHill.randomCustomer,capitolHill.capHillCooikesBoughtArr);
addingToDOM(capitolHill.capHillCooikesBoughtArr,capitolHill.locationName);

alki.alkiCooikesBoughtArr = randomCustomerPike(alki.randomCustomer,alki.alkiCooikesBoughtArr);
addingToDOM(alki.alkiCooikesBoughtArr,alki.locationName);


