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
var timeArr;
//Image DOM manipulation
//1.
parentImageURL = document.getElementById('parentImage');
//2.
ImageURL = document.createElement('img');
//3.
ImageURL.src = 'https://i.ytimg.com/vi/Ikp3XAJbHaw/maxresdefault.jpg';
//4.
parentImageURL.appendChild(ImageURL);

//This is an array constructor so I can dynamically create arrays and give them a name.
var HourArray = function(hourName, hourArr = []){
  this.hourName = hourName;
  this.hourArr = hourArr;
};

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
//This is the function to add the random number of cutomers and average cookies bought. I will also
Store.prototype.randomCustomerSales = function(randomCustomer,cooikesBoughtArr,avgCookie,timeArray){
  var totalCookies = 0;
  cooikesBoughtArr = [];
  var multipliedSales = 0;
  var changeVar;
  var changeVar2;
  var timeI;
  var timeJ;
  for(var i = 6; i < 12; i++){
    multipliedSales= this.randomCustomer()* avgCookie;
    cooikesBoughtArr.push(Math.floor(multipliedSales));
    totalCookies = totalCookies + multipliedSales;
    timeI = i+'am';
    changeVar = i-6;
    if(timeArray[changeVar].hourName===timeI){
      timeArray[changeVar].hourArr.push(Math.floor(multipliedSales));
    }
  }
  for(var j = 0; j < 8;j++){
    timeJ = j+'pm';
    changeVar2 = j+6;
    multipliedSales = randomCustomer * avgCookie;
    if(j !== 0){
      multipliedSales= this.randomCustomer()* avgCookie;
      cooikesBoughtArr.push(Math.floor(multipliedSales));
      totalCookies = totalCookies + multipliedSales;
      if(timeArray[changeVar2].hourName===timeJ){
        timeArray[changeVar2].hourArr.push(Math.floor(multipliedSales));
      }
    }
    else{
      j = 12;
      timeJ = 12 +'am';
      multipliedSales= this.randomCustomer()* avgCookie;
      cooikesBoughtArr.push(+Math.floor(multipliedSales));
      totalCookies = totalCookies + multipliedSales;
      timeArray[6].hourArr.push(Math.floor(multipliedSales));
      j = 0;
    }
  }
  return [cooikesBoughtArr,totalCookies,timeArr];
};
//This will used to add all the tags and elements to the DOM
Store.prototype.addingToDOM = function(cooikesBoughtArr, storeName){
  //This will add the location name to a td
  console.log(cooikesBoughtArr);

  // var lastStoreIndex =storeArray.length-1;
  // var lastStoreName = lastStoreIndex.locationName;
  // var table = document.createElement('table');
  // table.setAttribute('id',lastStoreName);
  storeContainerTBEl = document.getElementById(storeName);
  tdEl = document.createElement('td');
  tdEl.textContent = this.locationName;
  console.log(storeContainerTBEl);

  console.log(storeName);
  //This is getting the container the stores will be in.
  storeContainerTBEl.appendChild(tdEl);
  //This is a loop to display the information on the page.
  for(var i = 0; i< 14;i++ ){
    //This is creating the li element dynamic
    thEl = document.createElement('th');
    thEl.textContent = cooikesBoughtArr[0][i];
    storeContainerTBEl.appendChild(thEl);
  }
  //This will add the total at the bottom
  thElTotal = document.createElement('td');
  thElTotal.textContent = 'Total '+Math.floor(cooikesBoughtArr[1]);
  storeContainerTBEl.appendChild(thElTotal);
};
//This function will add the random number of customers
Store.prototype.randomCustomer = function (){return Math.floor(Math.random()* (this.maxCustomer-this.minCustomer))+ this.minCustomer;};
//This function will perform the main store functions
Store.prototype.doAll = function(Store,locationName){
  var ran = Store.randomCustomer();
  var arrayOfCookiesSales = Store.randomCustomerSales(ran,Store.cooikesBoughtArr,Store.avgCookie,timeArr);
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
var createHourName = function(){
  var timeArray = [];
  for(var i = 6; i <= 11; i++){
    timeArray.push(new HourArray(i+'am',[]));
  }
  for(var k = 0; k < 8; k ++){
    if(k===0){
      k = 12;
      timeArray.push(new HourArray(k+'pm',[]));
      k = 0;
    }
    else{
      timeArray.push(new HourArray(k+'pm',[]));
    }
  }
  console.log(timeArray);
  return timeArray;
};
//this will be considered the master function to perfrom most of what needs to happen
var masterFunction = function(Store){
  var masterArr = Store.doAll(Store,Store.locationName);
  return masterArr;
};
//I will be using this function to call all of my functions
var callingMasterFunction = function(storeArray){
  for (var i=0; i < storeArray.length; i++){
    var masterArr = masterFunction(storeArray[i]);
  }
  return masterArr;
};
//This fuction will add and render the hourly totals.
var addHourTotal = function(totalArray){
  console.log('hour total');
  var dailyAndHorlyTotals =0;
  var totalHour = 0;
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  for(var i = 0; i < totalArray.length;i++){
    totalHour = totalArray[i].hourArr.reduce(reducer);
    totalArray[i].hourArr.push(totalHour);
  }
  var storeContainerTablel = document.getElementById('hourly total');
  thEl = document.createElement('td');
  thEl.textContent = 'Hourly Total';
  storeContainerTablel.appendChild(thEl);
  console.log('before the loop');
  for(var j = 0; j< 14;j++ ){
    dailyAndHorlyTotals = dailyAndHorlyTotals + totalArray[j].hourArr[totalArray[j].hourArr.length-1];
    thEl = document.createElement('td');
    thEl.textContent = totalArray[j].hourArr[totalArray[j].hourArr.length-1];
    storeContainerTablel.appendChild(thEl);
  }
  thEl = document.createElement('td');
  thEl.textContent = 'Total: '+ dailyAndHorlyTotals;
  storeContainerTablel.appendChild(thEl);
};
//This is getting the data from the form and saveing it to an array so i can manipulated later
var form = document.getElementById('store form');
var handleFormSubmit = function(formSubmitEvent){
  console.log('I made with a click');
  formSubmitEvent.preventDefault();
  var locationNameForm = formSubmitEvent.target['locationName'].value;
  var minCustomerForm = formSubmitEvent.target['minCustomer'].value;
  var maxCustomerForm = formSubmitEvent.target['maxCustomer'].value;
  var avgCookiesForm = formSubmitEvent.target['avgCookies'].value;
  var newStore = new Store(locationNameForm, minCustomerForm, maxCustomerForm, avgCookiesForm);
  storeArray.push(newStore);
  if(storeArray.length <=6){
    masterArr = newStore.doAll(newStore,'newStore');
  }
  else{
    masterArr = newStore.doAll(newStore,'newStore2');
  }
};
timeArr = createHourName();
timeSetFunction();

var masterArr = callingMasterFunction(storeArray);
addHourTotal(masterArr[2]);
form.addEventListener('submit', handleFormSubmit);









