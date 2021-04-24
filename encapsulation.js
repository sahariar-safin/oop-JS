class Tiger {
    #speed = 100;
    constructor(name) {
        this.name = name,
            this.#speed = 399
    }
    run() {
        console.log(`This tiger name is ${ this.name } and her speed is ${ this.#speed }`);
    }
}

const bangelTiger = new Tiger("Bangeli Tiger");
bangelTiger.run();