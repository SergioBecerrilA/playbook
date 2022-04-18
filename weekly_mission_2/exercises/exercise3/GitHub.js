class Issue{
    constructor(title, repositoryNameAssociated, status, numberOfComments, labels, author, dateCreated, lastUpdated,){
        this.title = title; 
        this.repositoryNameAssociated = repositoryNameAssociated; 
        this.status = status; 
        this.numberOfComments = numberOfComments; 
        this.labels = labels; 
        this.author = author; 
        this.dateCreated = dateCreated; 
        this.lastUpdated = lastUpdated; 
    }

    getTitleAndAuthor(){
        return `Issue Name: ${this.title}, Issue Author ${this.author}`; 
    };

    getGeneralInfo (){
        return `
        title: ${this.title}
        repositoryNameAssociated: ${this.repositoryNameAssociated}
        status: ${this.status}
        numberOfComments: ${this.numberOfComments}
        labels: ${this.labels}
        author: ${this.author}
        dateCreated: ${this.dateCreated}
        lastUpdated: ${this.lastUpdated}`;
    };
}

class Repo {
    constructor(name, author, language, numberOfCommits, stars, forks, issues_open, issues_close){
        this.name = name;
        this.author = author;
        this.language = language;
        this.numberOfCommits = numberOfCommits;
        this.stars = stars;
        this.forks = forks;
        this.issues_open = issues_open;
        this.issues_close = issues_close;
    }

    getTotalIssues(){
      return this.issues_open + this.issues_close;
    }

    getGeneralInfo(){
      return `This repository ${this.name} was created by ${this.author}`
    }
   }
   
class Pull {
    constructor(title, branchName, dateCreated, statusPull, nameRepository){
        this.title = title;
        this.branchName = branchName;
        this.dateCreated = dateCreated;
        this.statusPull = statusPull;
        this.nameRepository = nameRepository;
    }

    getStatus(){
        return `Status: ${this.statusPull}`
    }
    getTitleAndAutor(){
        return `Title: ${this.title} Author: ${this.branchName}`
    }
}