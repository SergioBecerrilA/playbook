//Pull Request
const pullRequest = {
    title: "Correccion de sintaxis",
    branchName: "Alb/Pagina-web-3",
    dateCreated: "17/04/2022",
    status: "Esperando",
    repositoryNameAssociated: "Pagina-web-3",

    getStatus(){
        return `Status: ${this.status}`
    },

    getTitleAndAutor(){
        return `Title: ${this.title} Author: ${this.branchName}`
    }
}

    console.log(pullRequest.getStatus())
    console.log(pullRequest.getTitleAndAutor())

