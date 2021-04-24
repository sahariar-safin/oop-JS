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
    goForSell() {
        if (this.price) {
            console.log(this.getPower());
        }
        return "Price is too hign, buyer is not buy you!"
    }
}

const Avada = new Pendrive("avada", 100);

console.log(Avada.name);
// console.log(Avada.getPower());
console.log(Avada.goForSell());