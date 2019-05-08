import React from 'react';
import superagent from 'superagent';

class Header extends React.Component {
  render(){
    return (
      <header>
        <h1>City Explorer</h1>
        <p>Enter a location below to learn about the weather, events, restaurants, movies filmed there, and more!</p>
      </header>
    )
    }  
}

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      
    }
  } 
      render() {
        return (
          <React.Fragment>
            <Search />
            <Map />
            <Result />
            <Result />
            <Result />
            <Result />
            <Result />
          </React.Fragment>
        )  
      }
}

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      
    }

  // handleSearch = e => {
    
  // }

}
    render() {
      return (
        <div>
          <input onChange={this.handleWord} />
          <button onClick={this.handleSearch}>Search Location</button>
        </div>
      )
    }
}

class Map extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }
    render() {
      return (
        <div>
          <p>Google Maps</p>
        </div>
      )
    }
}

class Result extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }
    render() {
      return (
        <section>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </section>
      )
    }
}

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Main url="google.com"/>
      </React.Fragment>
    )
  }
}

export default App;
