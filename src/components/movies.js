import React from 'react';
import superagent from 'superagent';

class Movies extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movieResults: []
    }
  }

  setLatLong = async event => {
    let movieData = await superagent.get('https://mysterious-river-14511.herokuapp.com/movies')
      .query({data: this.props.results.body});    
      this.setState({movieResults: movieData.body})
      console.log('Movie Data', movieData);
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
        <section class='column-container'>
          <h2>Movies DB</h2>
        {this.state.movieResults.map((val, idx) => {
          return (
            <div>
                <li key={idx}>
                  <p><span>{ val.title }</span> was relased on { val.released_on }. Out of { val.total_votes } total votes, { val.title } has an average vote of { val.average_votes }and a popularity score of { val.popularity }.</p>
                  <img alt='movie poster' src= { val.image_url } height='250px'/>
                  <p>{ val.overview }</p>
                </li>
            </div>
            );
          })}
        </section>
      )
    }

}

export default Movies;