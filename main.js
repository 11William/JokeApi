const app = require('express')();
const fs = require('fs').promises;
const PORT = 6921;


const pathJoke = "Jokes/jokes.json";

var lastTenDark = [];
var lastTenJokes = [];

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
