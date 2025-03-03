const app = require('express')();
const fs = require('fs');
const PORT = 6921;

const pathDark = "Jokes/darkJokes.json";
const pathJoke = "Jokes/jokes.json";

var lastTenDark = [];
var lastTenJokes = [];


function getDarkJoke() {
    const data = fs.readFileSync(pathDark);
    const jokes = JSON.parse(data).darkJokes;
    let randomIndex;

    do {
        randomIndex = Math.floor(Math.random() * jokes.length);
    } while (lastTenDark.includes(randomIndex));

    lastTenDark.push(randomIndex);
    if (lastTenDark.length > 10) {
        lastTenDark.shift();
    }

    return jokes[randomIndex];
}

function getJoke() {
    const data = fs.readFileSync(pathJoke);
    const jokes = JSON.parse(data).jokes;
    let randomIndex;

    do {
        randomIndex = Math.floor(Math.random() * jokes.length);
    } while (lastTenJokes.includes(randomIndex));

    lastTenJokes.push(randomIndex);
    if (lastTenJokes.length > 10) {
        lastTenJokes.shift();
    }

    return jokes[randomIndex];
}






app.get("/darkJoke", (req, res) => {
    console.log("Someone requested a dark joke!");
    var joke = getDarkJoke();
    console.log(joke.joke);
    res.send(joke.joke);
    //res.send("Why did the tomato turn red? Because it saw the salad dressing!");
});

app.get("/joke", (req, res) => {
    console.log("Someone requested a joke!");
    var joke = getJoke();
    console.log(joke.joke);
    res.send(joke.joke);
    //res.send("Why did the tomato turn red? Because it saw the salad dressing!");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});