class calculadora {
    calculate(a, b) {

    }
}

class suma extends calculadora {
    calculate(a, b) {
        return a + b;
    }
}

class resta extends calculadora {
    calculate(a, b) {
        return a - b;
    }
}

class multipliacion extends calculadora {
    calculate(a, b) {
        return a * b;
    }
}

function ejecutarOperacion(operacion, a, b) {
    if (!operacion instanceof calculadora) { //instafe of, para saber si operacion es una instancia de calculadora, (se niega)
        console.log("Error");
    } else {
        return operacion.calculate(a, b);
    }
}

const adicion = new suma();
const substraccion = new resta();
const mult = new multipliacion();

console.log("suma", ejecutarOperacion(adicion, 5, 7));