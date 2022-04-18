trending = {
    type: "Politico",
    title: "El presidente Putin",
    position: 4,
    tweets: "145 mil",

    getInteractions(){
        return `El topico ${this.title} tiene ${this.tweets} de reacciones`
    }
}

console.log(trending.getInteractions())