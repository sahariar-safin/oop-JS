class Common {
    constructor(name, price) {
        this.name = name,
            this.price = price
    }
    Charge() {
        return "I eat only electro!"
    }
}

class Phone extends Common {
    constructor(name, price, camera) {
        super(name, price),
            this.camera = camera
    }
}

class Tablet extends Common {
    constructor(name, price, isWiFi) {
        super(name, price),
            this.isWiFi = isWiFi
    }
}

const phone = new Phone("samsu", 40000, "23MGP");
console.log(phone);
const tablet = new Tablet("apple", 69099, "Yes");
console.log(tablet.Charge());
