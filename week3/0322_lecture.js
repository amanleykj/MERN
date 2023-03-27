// promises information is below

let trashGotTakenOut = true;

const takeOutTheTrash = new Promise( (resolve, reject) => {
    if(trashGotTakenOut){
        resolve('Thanks for getting that trash for me.')
    }
    else{
        reject('You did not take out that trash L:(')
    }
    
})

takeOutTheTrash
    .then(message => console.log(message))
    .catch(error => console.log(error))



function getNBAAthletes (request) {
    return new Promise(resolve, reject) => {
        if (request === 'NBA'){
            resolve([
                
            ])
        }
    }
}


// then and resolve are mathched above; catch and reject are matched above