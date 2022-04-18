//Issue
const issue = {
    title: "Error de sintaxis",
    repositoryNameAssociated: "Pagina Web #3",
    status: "Open",
    numberOfComments: 8,
    labels: 6,
    author: "SergioBecerrilA",
    dateCreated: "15/04/2022",
    lastUpdated: "17/04/2022",

    getTitleAndAuthor(){
        return `El repositorio -> ${this.title} es de -> ${this.author}`
    },

    getGeneralInfo(){
        return `Titulo -> ${this.title}, autor -> ${this.author}, status -> ${this.status}, ultima modificacion -> ${this.lastUpdated}`
    }
}

    console.log(issue.getTitleAndAuthor())
    console.log(issue.getGeneralInfo())
