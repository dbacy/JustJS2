var jobList = require("C:/Projects/SD105-javaScript/ExpressReview/jobs.json");

//console.log(jobList[0])

let progammers = jobList.filter (j => j.Title.search('Vice')>=0 && j.Salary > 100000 && j.City == 'Dallas')

let total = progammers.reduce((tot , p) => p.Salary + tot, + 0)
console.log(`Total salary for VP position in Dalass is: ${total}`)


console.log(progammers.length)

progammers.forEach(p => console.log(p.Title + " || " + p.Salary))
