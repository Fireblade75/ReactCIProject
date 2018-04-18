const express = require("express")

const app = express()
const animals = require("./animals.json")

app.use(express.static(`${__dirname}/../public`))
console.log(`${__dirname}/../public`)

/**
 * @api {get} /user/:id Request Animals
 * @apiName GetAnimals
 * @apiGroup Animal
 *
 * @apiParam {String} type of the animals.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
app.get("/animals", (req, res) => {
    if (req.query.type) {
        const result = animals.filter(animal => animal.type === req.query.type)
        res.json(result)
    } else {
        res.json(animals)
    }
})

app.get("/animals/:id", (req, res) => {
    const id = Number.parseInt(req.params.id, 10)
    if (Number.isNaN(id)) {
        res.status(400).end()
    }
    const result = animals.find(animal => animal.id === id)
    if (result) {
        res.json(result)
    } else {
        res.status(404).end()
    }
})

module.exports = app
