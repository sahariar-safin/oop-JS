class Man {
    constructor(name, power) {
        this.name = name,
            this.power = power
    }
    getPower() {
        if (this.power) {
            return this.power;
        }
        return "You are a am jonota!"
    }
    goForGrosary() {
        if (this.power) {
            console.log(this.getPower());
        }
        return "Why you are trying this method!"
    }
}

const antMan = new Man("Ant Man", "khamci")
console.log(antMan);
// console.log(antMan.getPower());
console.log(antMan.goForGrosary());