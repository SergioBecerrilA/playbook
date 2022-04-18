const post = {
    user: "Sergio Becerril",
    description: "La vida es tan...",
    datePost: "03/02/2022",
    likes: 12,
    comments: 5,
    shares: 2,

    getStats(){
        return `Publicacion: ${this.description}, Likes -> ${this.likes}, Comments -> ${this.comments}, Shares -> ${this.shares}`
    },

    getPostData(){
        return `${this.user} publico... -${this.description}- ${this.datePost}`
    }
}

console.log(post.getStats())
console.log(post.getPostData())