import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/serach-box.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchText: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users =>
        this.setState({
          monsters: users
        })
      )
      .catch(error => console.log(error));
  }

  render() {
    const { monsters, searchText } = this.state;
    let filteredMonsters = monsters;
    if (searchText !== '') {
      filteredMonsters = monsters.filter(monster =>
        monster.name.toLowerCase().includes(searchText.toLowerCase())
      );
    }
    return (
      <div className='App'>
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder='Search Monsters'
          handleChange={e => this.setState({ searchText: e.target.value })}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
