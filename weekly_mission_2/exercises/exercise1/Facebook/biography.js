const biography = {
    user: "Sergio Becerril",
    description: "Solo un tipo más",
    age: 23,
    sex: "Male",
    dayOfBirth: "22 de Febrero",
    country: "Mexico",
    studies: "U de G",

    getBasic(){
        return `Nombre: ${this.user}. Edad: ${this.age}. Sexo: ${this.sex}. Pais: ${this.country}.`
    }
}

console.log(biography.getBasic())