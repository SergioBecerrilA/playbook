const user = {
    name: "Sergio Becerril",
    email: "secBec@outlook.com",
    password: "123",

    getInfo(){
        return `Nombre -> ${this.name} Email -> ${this.email}`
    }
}
console.log(user.getInfo())