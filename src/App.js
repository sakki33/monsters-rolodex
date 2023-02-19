import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component'; 
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchfield: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  handlechange = e => {
    this.setState({ searchfield: e.target.value }); 
  }

  render() {
    const { monsters, searchfield } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchfield.toLocaleLowerCase())
    );

    return (
      <div className='App'>
        <h1> Monsters rolodex </h1>
        <SearchBox
          placeholder='search monsters'
          handlechange={this.handlechange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;