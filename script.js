//1
const mcuShows = ["Loki", "What If...?"];
const starWarsShows = ["The Mandalorian", "The Bad Batch"];
const disneyPlusShows = [mcuShows, starWarsShows, "Monsters At Work"]
console.log(disneyPlusShows);

//2
const netflixMovies = {action: "The Tomorrow War", drama: "One Night In Miami"}
const amazonPrimeMovies = {musical: "Hamilton"}
const streamingMovies = {...netflixMovies, ...amazonPrimeMovies}
console.log(streamingMovies);

//3
const disneyJunior = ["Mickey Mouse Clubhouse", "Spidey and His Amazing Friends"];
const junior = {mickey: "Mickey Mouse Clubhouse", spidey: "Spidey and His Amazing Friends"};
console.log(junior);

//4
const avengers = {warMachine: "James Rhodes", theHulk: "Bruce Banner"};
let {James Rhodes = "warMachine"}
let {Bruce Banner = "theHulk"};
console.log(avengers);
const moreAvengers = {blackWidow: "Natasha Romanoff", hawkeye: "Clint Barton", ironMan: "Tony Stark"};
let nat = "Natasha Romanoff"
let others = Clint Barton", "Tony Stark"
let {nat, others} = moreAvengers

//5
const bonus = {
    first: [1, 2, 3],
    second: [4, 5, 6],
    third: [7, 8, 9]
  };
const all = {...first, ...second, ...third}
let {const one = 1}
let {const two = 2}
let {const three = 3}
let {const four = 4}
let {const five = 5}
let {const six = 6}
let {const seven = 7}
let {const eight = 8}
let {const nine = 9}