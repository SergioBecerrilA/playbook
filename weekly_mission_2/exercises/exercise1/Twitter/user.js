const user = {
    user: "Sergio B",
    username: "SergioBecerrilA",
    bio: "Lets see..",
    age: 23,
    follows: 78,
    followers: 18,

    info(){
        return `Nombre:${this.user}, Usuario:${this.username}, Bio:${this.bio}, Followers:${this.followers}`
    },
    getStats(){
        return `${this.username} have ${this.followers} followers and ${this.follows} follows`
    }
}

    console.log(user.info())
    console.log(user.getStats())