//1
const mcuShows = ["Loki", "What If...?"];
const starWarsShows = ["The Mandalorian", "The Bad Batch"];
const disneyPlusShows = [...mcuShows, ...starWarsShows, "Monsters At Work"]
console.log(disneyPlusShows);

//2
const netflixMovies = {action: "Extraction", crime: "The Irishman"};
const amazonPrimeMovies = {action: "The Tomorrow War", drama: "One Night In Miami"};
const streamingMovies = {...amazonPrimeMovies, ...netflixMovies, musical: "Hamilton"};
console.log(streamingMovies);

//3
const disneyJunior = ["Mickey Mouse Clubhouse", "Spidey and His Amazing Friends"];
const [mickey, spidey] = disneyJunior;
console.log(disneyJunior);

//4
const avengers = {warMachine: "James Rhodes", theHulk: "Bruce Banner"};
const {warMachine, theHulk} = avengers;
console.log(avengers);
const moreAvengers = {blackWidow: "Natasha Romanoff", hawkeye: "Clint Barton", ironMan: "Tony Stark"};
const {blackWidow: nat, ...other} = moreAvengers;
console.log(nat, other);

//5
const bonus = {
    first: [1, 2, 3],
    second: [4, 5, 6],
    third: [7, 8, 9]
  };
  const all = [...bonus.first, ...bonus.second, ...bonus.third];
  const {first, second, third} = bonus;
  const [one, two, three] = first;
  const [four, five, six] = second;
  const [seven, eight, nine] = third;