 //1st challenge
/*
 let sum=0;
 let i=1;

 while(i<=5){
    sum+=i;
    i++;
 }
 console.log(sum);
 */

 //2nd Challenge

/*
 let arr=[];
 let i = 5;

 while(i>0){
    arr.push(i);
    i--;
 }
 console.log(arr);
 */ 

//3rd challenge

/*
let chai=["green tea","black tea","chai","oolong tea"];
let selectedTeas = [];

for (let i = 0; i < chai.length; i++) {

   if(chai[i] === "chai"){
      break;
   }else{
      selectedTeas.push(chai[i]);}  
}
console.log(selectedTeas);
*/

//4th challenge
/*
let city=["London","New York","Paris","Berlin"];
let visitedCities = [];

for (let i = 0; i < city.length; i++) {

   if(city[i] === "Paris"){
      continue;
   }else{
      visitedCities.push(city[i]);}  
}
console.log(visitedCities);
*/

//5th Challenge : For-of Loop

/*
let numbers = [1,2,3,4,5]
let smallNumbers = []

for (const num of numbers) {

   if(num === 4){
      break;
   }else{
      smallNumbers.push(num);
   }
}console.log(smallNumbers);
*/

//6th Challenge

/*
let teas=["chai","green tea","herbal tea","black tea"];
let selectedTeas=[];

for (const element of teas) {
   if(element === "herbal tea"){
      continue;
   }else{
      selectedTeas.push(element)
   }
}console.log(selectedTeas);
*/

//7th Challenge :  For-In Loop

/*
let cityPopulation = {
   "London" : 8900000,
   "New York" : 8400000,
   "Paris" : 2200000,
   "Berlin" : 3500000
};

let cityPops = {};

// console.log(Object.keys(cityPopulation)); //keys
// console.log(Object.values(cityPopulation)); // values

for (const city in cityPopulation) {
   if(city == "Berlin"){
      break;
   }
   cityPops[city] = cityPopulation[city];
}console.log(cityPops);

*/

//8th Challenge

/*
let worldCities = {
   "Sydney" : 5000000,
   "Tokyo" : 9000000,
   "Berlin" : 3500000,
   "Paris" : 2200000
};

let Citieswith3mil={};

for(const city in worldCities){
   if( worldCities[city]< 3000000){
      continue;
   }else{
      Citieswith3mil[city] = worldCities[city];
   }
}console.log(Citieswith3mil);
*/

//9th Challenge : For-Each loop

/*
let teas = ["earl tea","green tea","chai","oolong tea"];
let newTea = [];

teas.forEach(function (tea) {
  if (tea == "chai"){
   return;
  }else{
   newTea.push(tea);
  }
   
});
console.log(newTea);
*/

//10th Challenge 

/*
let worldcity = ["Berlin","Tokyo","Sydeny","Paris"];
let traveledcity=[];

worldcity.forEach(city => {
   if(city == "Sydeny"){
      return;
   }traveledcity.push(city);
});
console.log(traveledcity);
*/

//11th Challenge

/*
let numbers =[2,5,7,9];
let doublednumber = [];

for (let index = 0; index < numbers.length; index++) {
   if(numbers[index] == 7){
      continue;
   }
   doublednumber.push(2*numbers[index]);
}
console.log(doublednumber);
*/

//12th Challenge

let teas = ["earl tea","green tea","chai","oolong tea","jasmine tea","herbal tea"];

let shortTeas = [];

for (const tea of teas) {
   if(tea.length > 10){
      break;
   }
   shortTeas.push(tea);
}
console.log(shortTeas);
