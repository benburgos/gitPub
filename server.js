require('dotenv').config();
const PORT = process.env.PORT;

const express = require('express');
const app = express();
const drinks = require('./models/drinks.js')

app.get('/', (req, res) => {
    res.send('Welcome to the Gitpub App!')
});

app.get('/drinks', (req, res) => {
    res.render('drinks_index.ejs', { allDrinks: drinks })
})

app.get('/drinks/:id', (req, res) => {
    drinks[req.params.id].image = drinks[req.params.id].image.replace(/.jpg/, '.png')
    res.render('drinks_show.ejs', { drink: drinks[req.params.id]})
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