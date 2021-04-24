class Pendrive {
    constructor(name, price) {
        this.name = name,
            this.price = price
    }
    getPower() {
        if (this.price) {
            return this.price;
        }
        return "You dont have any price!"
    }
}

const Avada = new Pendrive("avada");

console.log(Avada.name);
console.log(Avada.getPower());