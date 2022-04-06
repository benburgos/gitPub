require('dotenv').config();
const PORT = process.env.PORT;

const express = require('express');
const app = express();

app.get('/drinks', (req, res) => {
    res.send('Welcome to the Gitpub App!')
});

app.get('/drinks/:id', (req, res) => {
    res.send(drinks[req.params.id])
});

app.listen(PORT, () => {
    console.log(`
    Are you locked up in a world
    That's been planned out for you?
    Are you feeling like a social -
    Tool without a use?
    Scream at me until my ears bleed.
    I'm taking heed just for you.
    `)
});