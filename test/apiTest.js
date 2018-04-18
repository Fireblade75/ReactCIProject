const request = require("supertest")
const app = require("../server/server")
const { expect } = require("chai")

describe("Animals", () => {
    it("Get all animals", (done) => {
        request(app)
            .get("/animals")
            .expect("Content-Type", /json/)
            .expect(200)
            .end((err, res) => {
                if (err) throw err
                expect(res.body).have.lengthOf(8)
            })
        done()
    })

    it("Get all horses", (done) => {
        request(app)
            .get("/animals?type=horse")
            .expect("Content-Type", /json/)
            .expect(200)
            .end((err, res) => {
                if (err) throw err
                expect(res.body).have.lengthOf(3)
            })
        done()
    })

    it("Get all stones", (done) => {
        request(app)
            .get("/animals?type=stone")
            .expect("Content-Type", /json/)
            .expect(200)
            .end((err, res) => {
                if (err) throw err
                expect(res.body).to.equal([])
            })
        done()
    })
})

describe("Animal", () => {
    it("Get animal 103", (done) => {
        request(app)
            .get("/animals/103")
            .expect("Content-Type", /json/)
            .expect(200)
            .end((err, res) => {
                if (err) throw err
                expect(res.body.name).to.equal("Carlos")
            })
        done()
    })
})
