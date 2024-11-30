class car{
    constructor(make, model){
        this.make = make;
        this.model = model;
    }
    start(){
        return `${this.model} is a car from ${this.make}`
    }
}

//Inheritance

class mycar extends car {
    drive(){
        return `${this.make} : This is my fathers car`;
    }
}

let vehicle = new mycar("Tata","Curv");
// console.log(vehicle.start());
// console.log(vehicle.drive());

//Encapsulation

class BankAccount {
    #balance = 100;

    deposit(amount){
        this.#balance+=amount;
        return this.#balance;
    }
    getBalance(){
        return `Rs.${this.#balance}`;
    }
}

let account = new BankAccount();
// console.log(account.getBalance());

// Abstraction

class coffeeMachine{
    start(){
        return `Starting the Coffee Machine`;
    }
    brewCoffee(){
        return `Brewing Coffee`;
    }
    getCoffee(){
        let firststep = this.start();
        let secondstep = this.brewCoffee();
        return `${firststep}...${secondstep}`
    }
}

let myCoffee = new coffeeMachine();
// console.log(myCoffee.getCoffee());


//polmorphism

class bird{
    fly(){
        return `Hey I am a bird , and i can fly`;
    }
}

class ostrich extends bird{
    fly(){
        return ` Hey I am a bird , and i can't fly`;
    }
}

let hen = new bird()
let Ostrich = new ostrich()

console.log(hen.fly());
console.log(Ostrich.fly());

