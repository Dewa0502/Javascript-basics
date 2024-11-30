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
console.log(vehicle.start());
console.log(vehicle.drive());

