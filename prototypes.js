let computer = { cpu : 12};
let lenovo = { 
    screen: "HD",
    __proto__: computer
};
let tomHardware = {};

//console.log(`computer`, computer.__proto__);
// console.log(`lenovo`, lenovo.__proto__);

//other way of using prototype

let car = { tyre:4 };
let tesla = {driver:"AI"};

Object.setPrototypeOf(tesla, car);

console.log(`tesla`, Object.getPrototypeOf(car));



