 import React, { Component } from "react";
import './App.css';
import CardList from './CardList';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBox from './SearchBox';
import Scroll from './Scroll'




class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users => this.setState({ robots: users}));
  
  }
 

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const filteredRobots = this.state.robots.filter(robots => {
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    if (this.state.robots.length === 0) {
      return <h1>Loading</h1>
    } else { 
  return (
     <div className='tc'>
    <h1><strong>RoboFriends</strong></h1>
    <SearchBox searchChange={this.onSearchChange}/>
    <Scroll>
    <CardList robots = { filteredRobots } />
    </Scroll>
    </div>
  );
}
}
}

export default App