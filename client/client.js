/* eslint-disable no-unused-vars */
const React = require("react")
const AnimalTable = require("./components/AnimalTable")
/* eslint-enable no-unused-vars */
const ReactDOM = require("react-dom")
require("./style/style")

ReactDOM.render(
    <AnimalTable/>,
    document.getElementById("react-container"),
)
