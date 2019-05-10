import React from 'react';
import Header from './header.js';
import Search from './search-form.js';
import Map from './map.js';
import Weather from './results.js';
import Movies from './movies.js';
import Yelp from './yelp.js';
import Events from './events.js';

const If = props => {
  return props.condition ? props.children : null;
}

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      results: null,
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
            <If condition={ this.state.results !== null}>
              <Weather
                latitude={this.state.results ? this.state.results.body.latitude : ''} 
                longitude={this.state.results ? this.state.results.body.longitude : ''}
              />
              <Events 
                latitude={this.state.results ? this.state.results.body.latitude : ''} 
                longitude={this.state.results ? this.state.results.body.longitude : ''}
              />
              <Movies
                results={this.state.results}
              />
              <Yelp
                results={this.state.results}
              />
            </If>
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
