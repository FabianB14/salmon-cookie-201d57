'use strict';
// I will build objects using the min customers, max customer and average cookie sales.
//This will be done using the locations as variables

//Global Var
var storeContainerTBEl;
var thEl;
var thElTotal;
var tdEl;
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

//This is my store constructor. I will be using this to build my stores
var Store = function(locationName,minCustomer,maxCustomer,avgCookie, cookiesBoughtArr){
  this.locationName = locationName;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookie = avgCookie;
  this.cooikesBoughtArr = cookiesBoughtArr;
};

//Using the constructor to create stores and pushing them to an array
//I will be using this arry make my code more DRY
var firstAndPike = new Store('1st and Pike',23,65,6.3,[]);
var seaTac = new Store('SeaTac Airport',3,24,1.2,[]);
var seattleCenter = new Store('Seattle Center',11,38,3.7,[]);
var capitolHill = new Store('Capitol Hill',20,38,2.3,[]);
var alki = new Store('Alki',2,16,4.6,[]);
var storeArray = [];
storeArray.push(firstAndPike);
storeArray.push(seaTac);
storeArray.push(seattleCenter);
storeArray.push(capitolHill);
storeArray.push(alki);

//These are the functions that the store objects will be using
Store.prototype.randomCustomer = function (){return Math.floor(Math.random()* (this.maxCustomer-this.minCustomer))+ this.minCustomer;};

//This will used to add all the tags and elements to the DOM
Store.prototype.addingToDOM = function(cooikesBoughtArr, storeName){
  //This will add the location name to a h3
  tdEl = document.createElement('td');
  tdEl.textContent = storeName;
  //This is getting the container the stores will be in.
  storeContainerTBEl = document.getElementById(storeName);
  storeContainerTBEl.appendChild(tdEl);
  //This is a loop to display the information on the page.
  for(var i = 0; i< 14;i++ ){
    //This is creating the li element dynamic
    thEl = document.createElement('th');
    console.log(cooikesBoughtArr[0]);
    thEl.textContent = cooikesBoughtArr[0][i];
    storeContainerTBEl.appendChild(thEl);
  }
  //This will add the total at the bottom
  thElTotal = document.createElement('td');
  thElTotal.textContent = 'Total '+Math.floor(cooikesBoughtArr[1]);
  storeContainerTBEl.appendChild(thElTotal);
};

//This is the function to add the random number of cutomers and average cookies bought
Store.prototype.randomCustomerPike = function(randomCustomer,cooikesBoughtArr,avgCookie){
  var totalCookies = 0;
  cooikesBoughtArr = [];
  var multipliedSales = 0;
  for(var i = 6; i < 12; i++){
    multipliedSales= this.randomCustomer()* avgCookie;
    cooikesBoughtArr.push(Math.floor(multipliedSales));
    totalCookies = totalCookies + multipliedSales;
  }
  for(var j = 0; j <=8;j++){
    multipliedSales = randomCustomer * avgCookie;
    if(j !== 0){
      multipliedSales= this.randomCustomer()* avgCookie;
      cooikesBoughtArr.push(Math.floor(multipliedSales));
      totalCookies = totalCookies + multipliedSales;
    }
    else{
      j = 12;
      multipliedSales= this.randomCustomer()* avgCookie;
      cooikesBoughtArr.push(+Math.floor(multipliedSales));
      totalCookies = totalCookies + multipliedSales;
      j = 0;
    }
  }
  return [cooikesBoughtArr,totalCookies];
};
//This function will add the random number of customers
Store.prototype.randomCustomer = function (){return Math.floor(Math.random()* (this.maxCustomer-this.minCustomer))+ this.minCustomer;};
//This function will perform the main store functions
Store.prototype.doAll = function(Store,locationName){
  var ran = Store.randomCustomer();
  var arrayOfCookiesSales = Store.randomCustomerPike(ran,Store.cooikesBoughtArr,Store.avgCookie);
  Store.addingToDOM(arrayOfCookiesSales,locationName);
  return(arrayOfCookiesSales);
};

//This is the function to add the time to the page using DOM manipulation.
var timeSetFunction = function(){
  storeContainerTBEl = document.getElementById('table head');
  thEl = document.createElement('th');
  thEl.textContent = ' Location';
  storeContainerTBEl.appendChild(thEl);
  for(var i = 6; i < 12; i++){
    thEl = document.createElement('th');
    thEl.textContent = i+':00 am';
    storeContainerTBEl.appendChild(thEl);
  }
  for(var j = 0;j < 8; j++){
    if(j !== 0){
      thEl = document.createElement('th');
      thEl.textContent = j+':00 pm';
      storeContainerTBEl.appendChild(thEl);
    }
    else{
      thEl = document.createElement('th');
      thEl.textContent = 12+':00 pm';
      storeContainerTBEl.appendChild(thEl);
    }
  }
  if(j === 8){
    thEl = document.createElement('th');
    thEl.textContent = 'Daily Location Total';
    storeContainerTBEl.appendChild(thEl);
  }
};

//this will be considered the master function to perfrom most of what needs to happen
var masterFunction = function(Store){
  Store.doAll(Store,Store.locationName);
};

//Here I am calling all the functions
timeSetFunction();
masterFunction(firstAndPike);
masterFunction(seaTac);
masterFunction(seattleCenter);
masterFunction(capitolHill);
masterFunction(alki);
