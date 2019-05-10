import React from 'react';
import superagent from 'superagent';

class Yelp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      yelpResults: []
    }
  }

  setLatLong = async event => {
    let yelpData = await superagent.get('https://mysterious-river-14511.herokuapp.com/yelp')
      .query({data: this.props.results.body});    
      this.setState({yelpResults: yelpData.body})
      console.log('Yelp Data', yelpData);
  };

  componentDidMount() {
    this.setLatLong();
  }

  componentDidUpdate(prevProps){
    if (this.props.results !== prevProps.results) {
      this.setLatLong();
    }
  }


    render() {
      return (
        <React.Fragment>
          <h2>Yelp</h2>
        {this.state.yelpResults.map((val, idx) => {
          return (
            <div>
                <li key={idx}>
                  <a href={ val.url }>{ val.name }</a>
                  <p>The average rating is { val.rating } out of 5 and the average cost is { val.price } out of 4</p>
                  <img alt='food' src={ val.image_url } height='250px'/>
                </li>
            </div>
            );
          })}
        </React.Fragment>
      )
    }

}

export default Yelp;