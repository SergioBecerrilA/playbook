hashtag = {
    type: "Politico",
    tag: "#putin",
    position: 4,
    tweets: "184 mil",

    getInfo(){
        return `El hashtag ${this.tag} tiene ${this.tweets} de reacciones`
    }
}

console.log(hashtag.getInfo())