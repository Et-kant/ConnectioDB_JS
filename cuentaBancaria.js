class bankaccount {
    #balance

    constructor(balanceInicial = 0) {
        this.#balance = balanceInicial;
    }

    depositar(valor) {
        if (valor > 0) {
            this.#balance += valor;
            console.log("Deposito hecho");
        } else {
            console.log("Error en el desposito");
        }
    }

    retirar(valor) {
        if (valor > this.#balance) {
            console.log("Fondos insuficientes");
        } else if (valor <= 0) {
            console.log("No ingresar valor menor a 0");
        } else {
            this.#balance -= valor;
            console.log("Retiro Exitoso");
        }
    }

    getBalance() {
        return this.#balance;
    }
}



const banco = new bankaccount(100);

banco.depositar(300);
console.log(`El saldo de la cuenta es de ${banco.getBalance()}`);

banco.retirar(10);
console.log(`El saldo de la cuenta es de ${banco.getBalance()}`);