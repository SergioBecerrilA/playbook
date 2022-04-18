const travel = {
    type: "Economic",
    strating: "Av Camacho, 458",
    ending: "Lima, 1245",
    amount: 75.50,
    status: "Ended",

    getStatus(){
        return `Inicio: ${this.strating}. Final -> ${this.ending}. Cobro: ${this.amount}. Estatus: ${this.status}.`
    }
}