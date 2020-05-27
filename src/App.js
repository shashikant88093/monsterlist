import React, { Component } from "react";
import "./App.css";
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component.jsx'
import {Row} from 'reactstrap';
class App extends Component {
  state = {
    monsters: [],
    searchField: '',
  };
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }


  render() {
    const { monsters, searchField } = this.state
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )

    return (
    <div className="App ">
      <Row>
                <h1>Shashikant Monster List</h1>
      <SearchBox
        placeholder='search monsters'
        handleChange={e =>
          this.setState({ searchField: e.target.value }, console.log(e.target.value))
        }

      />
      <CardList monstars={filteredMonsters} />
      </Row>
    </div>);
  }
}

export default App;
