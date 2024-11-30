function person(name, age){
    this.name = name;
    this.age = age;
}

function car(company, model){
    this.company = company;
    this.model = model; 
}

let myCar = new car("toyota","Hilux");
let mynewCar = new car("tata","Curv");

// console.log(mynewCar);

function myTea(type){
    this.type = type;
    this.describe= function(){
        return `This is a cup of ${this.type}`;
    };
}

let masalaTea = new myTea("Masala Tea");
// console.log(masalaTea.describe());


function Animal(species){
    this.species = species;
}

Animal.prototype.sound = function(){
    return `${this.species} makes a sound`;
};
 let dog = new Animal("Dog");
//  console.log(dog.sound());

function Drink(type){
    if(!new.target){
        throw new Error("Drink must be called with new keyword");
    }
    this.type = type;
}
 
let Tea = new Drink("Tea");
let coffee = Drink("Coffee");
