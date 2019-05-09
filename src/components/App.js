import React from 'react';
// import superagent from 'superagent';
import Header from './header.js';
import Search from './search-form.js';
import Map from './map.js';
import Result from './results.js';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      results: {},
    };
  } 

  handleForm = (results) => {
    this.setState({ results });
  };

      render() {
        return (
          <React.Fragment>
            <Search prompt="Click for information on your chosen location" handler={this.handleForm} />
            <Map results={this.state.results}/>
            <Result />
            <Result />
            <Result />
            <Result />
            <Result />
          </React.Fragment>
        )  
      }
}

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Main />
      </React.Fragment>
    )
  }
}

export default App;
