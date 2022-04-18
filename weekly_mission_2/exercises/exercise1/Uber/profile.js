const profile = {
    name: "Sergio Becerril",
    email: "serBec@outlook.com",
    travels: 21,
    rate: 4,

    getInfo(){
        return `Nombre -> ${this.name}. Numero de viajes -> ${this.travels}`
    }
}

console.log(profile.getInfo())