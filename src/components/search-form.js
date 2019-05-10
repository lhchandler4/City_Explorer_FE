import React from 'react';
import superagent from 'superagent';


class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 'Please enter a location that you want to explore'
    }
  
}

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleSearch = async event => {
    event.preventDefault();
    let data = await superagent.get('https://mysterious-river-14511.herokuapp.com/location').query({data: this.state.value});
    this.props.handler(data);
  };

    render() {
      return (
        <div id='search'>
          <input onChange = {this.handleChange} />
          <button type='submit' onClick = {this.handleSearch}>Search Location</button>
        </div>
      )
    }
}

export default Search;