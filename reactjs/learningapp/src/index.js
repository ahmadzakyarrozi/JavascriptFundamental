import React from 'react';
import ReactDOM from 'react-dom';
import hari from './hari';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
const crateClass = require('create-react-class')


const judul = React.createElement('h1',null, 'Baked Salmon') //html dimulai untuk create element

// React.createElement("ul", {"className": "ingredients"},

// React.createElement("li", null, "A"),
// React.createElement("li", null, "B"),
// React.createElement("li", null, "C"),
// React.createElement("li", null, "D")

// );

var items = [
  "A",
  "B",
  "C",
  "D"
]

//Constructring Element With Data

  React.createElement(
  "ul",
  null,
  {className: "ingredients"},
  items.map((ingredient, i)=> React.createElement("li", null, {key: i}, ingredient))
)

//How to Create Component using create class
const JadwalList = crateClass({
  displayName : "ingredientsList",
  render() {
    return React.createElement("ul", {className : "daily"},
    React.createElement("li", null, "Senin"),
    React.createElement("li", null, "Selasa"),
    React.createElement("li", null, "Rabu"),
    React.createElement("li", null, "Kamis"),
    React.createElement("li", null, "Jumat"),

    )
  }
})

//Array In Create Class
const JadwalListArray = crateClass({
  displayName : "Jadwal List Zaki",
  render() {
    return React.createElement("ul", {className : "Schedule"},
    this.props.itemsJadwal.map((jadwal, i)=>{
      React.createElement("li", {key : i}, jadwal )
    })
    )
  }
})

const itemsJadwal = [
  "SENIN",
  "SELASA",
  "RABU",
  "KAMIS",
  "JUMAT"
]
const list = React.createElement(JadwalList, null, null)

ReactDOM.render(
// judul,

list,  
// React.createElement(JadwalListArray, {itemsJadwal}, null),

  document.getElementById('root')
  // <React.StrictMode>
    /* <App /> */
  /* </React.StrictMode>, */
  
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
