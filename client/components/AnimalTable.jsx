const React = require("react")
const Animal = require("./Animal")


class AnimalTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {animals: []};
    }

    fetchAnimals(type) {
        const url = "animals" + (type ? "?type=" + type : "")
        fetch(url)
            .then(response => response.json())
            .then(response => this.setState({ animals: response}))
    }

    render() {
        const fetchAll = (() => this.fetchAnimals()).bind(this)
        const fetchHorses = (() => this.fetchAnimals("horse")).bind(this)
        const fetchCats = (() => this.fetchAnimals("cat")).bind(this)

        return (
            <div>
                <button onClick={fetchAll} type="button">All</button>
                <button onClick={fetchHorses} type="button">Horses</button>
                <button onClick={fetchCats} type="button">Cats</button>
                <ul>
                    {this.state.animals.map((animal, i) =>
                        <Animal name={animal.name} type={animal.type} age={animal.age} />
                    )}
                </ul>
            </div>
        )
    }
}

module.exports = AnimalTable

