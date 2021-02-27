import React, { Component } from "react";

import { CardList } from "./components/card-list/card-list.component.jsx";

import "./App.css";

import { SearchBox } from "./components/search-box/search-box.component.jsx";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then((
      responses // fetching data of the monsters
    ) => responses.json().then((users) => this.setState({ monsters: users })));
  }

  handleChange = (e) => this.setState({ searchField: e.target.value });

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(
      (monster) =>
        monster.name.toLowerCase().includes(searchField.toLowerCase()) // for filturing the monstors by their name
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monsters...."
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
