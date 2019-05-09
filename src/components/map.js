import React from 'react';

class Map extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mapUrl:''
    }
  }
  
  componentDidUpdate=()=>{
    console.log(this.props.results.body);
    console.log(process.env.REACT_APP_GEOCODE_API_KEY);
    let newMapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${this.props.results.body.latitude}%2c%20${this.props.results.body.longitude}&zoom=13&size=600x300&maptype=roadmap
    &key=${process.env.REACT_APP_GEOCODE_API_KEY}`;
   
    if (this.state.mapUrl !== newMapUrl) {
      this.setState({mapUrl: newMapUrl});
    }
  }


  render() {
    return (
      <React.Fragment>
        <img alt='map' src={this.state.mapUrl}/>
      </React.Fragment>
    )
  }
}

export default Map;