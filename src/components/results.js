import React from 'react';
import superagent from 'superagent';

class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      weatherResults: []
    }
  }

  setLatLong = async event => {
    let weatherData = await superagent.get('https://mysterious-river-14511.herokuapp.com/weather')
      .query({data: {latitude: this.props.latitude, longitude: this.props.longitude}});    
      this.setState({weatherResults: weatherData.body})
      console.log('Weather Data', weatherData.body);
  };

  componentDidMount() {
    this.setLatLong();
  }

  componentDidUpdate(prevProps){
    if (this.props.latitude !== prevProps.latitude) {
      this.setLatLong();
    }
  }


    render() {
      return (
        <section>
          <h2>Dark Sky Weather</h2>
        {this.state.weatherResults.map((val, idx) => {
          return (
            <div>
                <li key={idx}>
                  {`The forecast for ${val.time} is: ${val.forecast}`}
                </li>
            </div>
            );
          })}
        </section>
      )
    }

}

export default Weather;