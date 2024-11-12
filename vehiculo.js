class vehiculo {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    getDetails() {
        console.log(
            `La informacion del vehiculo es: ${this.brand}, ${this.model}, ${this.year}`
        );
    }
}


const carro = new vehiculo("Ferrari", "f90", "1998");

carro.getDetails();