/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react'
import './App.css'
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component'

class App extends Component {
  // let APP (still a function )can inherit method from Component (it actually through prototype)
  constructor(props) {
    // same mean as function but inside is read-only
    super(props) // only exist in constructor(), lock this in class function
    this.state = {
      monsters: [],
      searchField: '',
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users', { method: 'get' })
      .then((response) => {
        if (response.status === 200) {
          return response.json()
        }
        return response
      })
      .then((users) => this.setState({ monsters: users }))
      // eslint-disable-next-line
      .catch((error) => alert(`fuck,show${error}`))
  }

  onSearchChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { monsters, searchField } = this.state
    const filterMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
        <h1>Monster Roldex</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={this.onSearchChange}
        />
        <CardList monsters={filterMonsters} />
      </div>
    )
  }
}
export default App
