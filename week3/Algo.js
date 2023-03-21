// PROBLEM 1:
// Maria plays college basketball and wants to go pro. 
// Each season she maintains a record of her play. She tabulates the number of times she breaks her season record for
// most points and least points in a game.
// Points scored in the first game establish her record for the season, and she begins counting from there.
// Given the scores for a season, determine the number of times Maria breaks her records for most and least points scored during the season.

// ! Heres the link to the full problem on hackerrank: https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem 

// Example: [12,24,10,24] would return [most is 1, least is 1]
// Her high and low score was established by the first game in which she scored 12 points 
// The next game she scored 24 points so she broke her high score of 12 
// The next game she scored 10 which broker her low score of 12 
// the final game she scored 24 again this ties her current high score so nothing changes 
// Finally you should return an array with how many times she broke her high and low score she broke both once so you would return [1,1] 


season1 = [23,59,23,21,20]
season2 = [1,50,25,100,2]
season3 = [20,30,11,45,23]

const playGames = (array) => {
    let highTotal = 0;
    let lowTotal = 0;
    let highScore = array[0]
    let lowScore = array[0]
    let tally = [highTotal, lowTotal];

        for (let index = 1; index < array.length; index++) {
        if(array[index] > highScore){
            highScore = array[index]
            highTotal = highTotal + 1
        }
        else if(array[index] < lowScore){
            lowScore = array[index]
            lowTotal = lowTotal + 1
        }
        // else{
        //     console.log("This added nothing.")
        // }
    }
    tally[0] = highTotal
    tally[1] = lowTotal
    console.log(tally)
}

// playGames(season3)


const biipUsers = [
    {
        firstName : 'Anthony', lastName : 'Manley', email : 'maka@mail.com', hasGuns : true, speaksJapanese : false
    },
    {
        firstName : 'Miho', lastName : 'Irie', email : 'miho@hotel.com', hasGuns : false, speaksJapanese : true
    },
    {
        firstName : 'Noriko', lastName : 'Joseph', email : 'akasaka@mail.com', hasGuns : false, speaksJapanese : true
    },
    {
        firstName : 'Trevor', lastName : 'Joseph', email : 't-aka-king@gmail.com', hasGuns : false, speaksJapanese : true
    }
]

const mapIt = biipUsers.map( (item, index, wholeArray) => {
    return (`${item.hasGuns} is the value of the thing, ${index} is the index number in the array, and ${wholeArray} is the just the whole darn array.`)
} );




const filterIt = biipUsers.filter( (item) => item.hasGuns === true);





let first_array = []


const populate_array = (form_submission) => {
    populate_array.push(form_submission)
    new_square = form_submission
}

const makeSquares = (array) => {
    array.map( (index) => {
        console.log(index)
        return index
    })

}

makeSquares(first_array)


// form to gather colors
// object creation that simply makes a square, but a part where a color must be added to complete the whole square
// array to grab these variables
// display those objects in the display page