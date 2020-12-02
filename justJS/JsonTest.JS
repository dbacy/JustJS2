let movie = require('./Casablanca.json');

let title = movie.title;
console.log(title);

let releaseDate = movie.releaseDate;
console.log(releaseDate);

for (let genre of movie.genres) {
    console.log(genre)
}

movie.genres.forEach(g => console.log(`Casablanca Genres: ${g}`))

console.log(`how many quotes ${movie.quotes.length}`)
console.log(`how much trivia ${movie.movieTrivia.length}`)

console.log('actor[0] :>> ', movie.actors[0].actorName)
console.log('actor[6] :>> ', movie.actors[6].actorName)


for (let n = 0; n < movie.actors.length; n++) {
    console.log('actors name : ', movie.actors[n].actorName)
}

movie.actors.forEach(a => console.log(`${a.actorName} played ${a.character}`))

   

// for (let i = 0; i < 5; i++) {
//     const element = movie.movieTrivia[i];
//     console.log(element);
// }

console.log(movie.movieTrivia[75])

let resume = {
    name: "Derek Bacy",
    bio: "king kong ain't got nothing on me ",
    previousEmployers: [{
            name: "unemployed",
            howLong: 1,
            title: "school"
        },
        {
            name: "Shipper group",
            howLong: 1,
            title: "Inventory Manager"
        }
    ],
    strengths: ["hard worker", "fast leaner", "organized"],
    school: ['edge tech', 'crosswinds high'],
}

console.log(`Hello my name is ${resume.name} and here is a little about me ${resume.bio}`)

for (const job of resume.previousEmployers) {
    console.log(job.name + job.howLong + job.title)
}

resume.previousEmployers.forEach(emp => console.log(`i worked at ${emp.name} for ${emp.howLong} years as a ${emp.title}`))

function getRandomNum(randMax) {
    return Math.floor((Math.random() * randMax));
}

// let max = 10;
// max--;
// console.log(max);
// for (let x = 0; x <= max; x += 2) {
//    console.log('still in the loop ' + x);
// }

// let max2 = 10;
// max2 -= 3;
// console.log(max2);
// for (let x = 0; x <= max2; x += 2) {
//    console.log('still in the loop ' + x);
// }

let max = 10;
max += max;
console.log(max);
for (let x = 0; x <= max; x += 3) {
   console.log('still in the loop ' + x);
}


let zebraOne = 9
let zebraTwo = 11
if (zebraOne < zebraTwo) 
  {console.log('zebra two wins')
}else { console.log('zebra one wins')}

function whoIsTheTallest (ch1 , ch2 , ch3) {
 if(ch1 > ch2 && ch1 > ch3) {
     return ch1
    }else if (ch2 > ch3) {
        return ch2
    }else {
        return ch3
    }
    

}
let tallest = whoIsTheTallest(5,8,12)
    console.log(`my tallest child is ${tallest} fett tall  `)
//  let tom = 60
//  let sam = 71
//  let don = 57

//     if(tom > sam && tom > don)
//        { console.log(tom + ' is the tallest ')
//     }else if (sam > tom && sam > don)
//        {console.log(sam + ' is the tallest ')
//     }else if (don > tom && don > sam)
//        {console.log(don + ' is the tallest ')}
    
    


let firstName = 'derek'
let lastName = 'Bacy'
let school = 'edge tech'
let hobby = 'coding'

let newName = firstName.toUpperCase
let whichSchool = school.startsWith('c')
let letterInHobby = hobby.charAt[4]
let fullName = firstName.concat(lastName)
let indexofschool = school.indexOf('e')
let lastindexof = hobby.lastIndexOf('f')

function loop(jump) {
    let date = new Date ()
    console.log(date)
    let hour = date.getHours()
    let second = date.getSeconds()

    for ( let i = hour; i < second; i+= jump) {
    console.log(i)
    count ++    
    }
    return count
}
let counter = loop(12)
console.log(`Looped ${counter}times `)

