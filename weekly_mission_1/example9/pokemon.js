class Pokemon {
    constructor (name) {
        this.name = name
    }
    // Pokemons hello
    sayHello() {
        console.log(`Mi pokemon ${this.name} te saluda!!!`)
    }


    //pokemons says
    sayMessage(message) {
        console.log(`Mi pokemon ${this.name} dice: ${message}`)
    }
}

module.exports = Pokemon