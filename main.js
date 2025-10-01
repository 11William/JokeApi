const app = require('express')();
const fs = require('fs').promises;
const PORT = 6921;

const pathDark = "Jokes/darkJokes.json";
const pathJoke = "Jokes/jokes.json";

var lastTenDark = [];
var lastTenJokes = [];


async function getDarkJoke() {
    const data = await fs.readFile(pathDark, 'utf8');
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

async function getJoke() {
    const data = await fs.readFile(pathJoke, 'utf8');
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






app.get("/darkJoke", async (req, res) => {
    console.log("Someone requested a dark joke!");
    var joke = await getDarkJoke();
    console.log(joke.joke);
    res.send(joke);
    //res.send("Why did the tomato turn red? Because it saw the salad dressing!");
});

app.get("/joke", async (req, res) => {
    console.log("Someone requested a joke!");
    var joke = await getJoke();
    console.log(joke.joke);
    res.send(joke);
    //res.send("Why did the tomato turn red? Because it saw the salad dressing!");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});