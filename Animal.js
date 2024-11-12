class animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    speak() {
        console.log("Mensaje general");
    }
}


class dog extends animal {
    constructor(name, age) {
        super(name, age)
    }

    speak() {
        console.log("woof");
    }
}

class cat extends animal {
    constructor(name, age) {
        super(name, age)
    }

    speak() {
        console.log("miau");
    }
}


const gato = new cat("coco", "21");

const perro = new dog("luna", "3");

perro.speak();
gato.speak();