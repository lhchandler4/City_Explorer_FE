import React from 'react';
import superagent from 'superagent';

class Events extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      eventsResults: []
    }
  }

  setLatLong = async event => {
    let eventsData = await superagent.get('https://mysterious-river-14511.herokuapp.com/events')
      .query({data: {latitude: this.props.latitude, longitude: this.props.longitude}});    
      this.setState({eventsResults: eventsData.body})
      console.log('events Data', eventsData.body);
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
        <section id='event'>
          <h2>Events</h2>
        {this.state.eventsResults.map((val, idx) => {
          return (
            <div>
                 <li key={idx}>
                    <a href={ val.link }>{ val.name }</a>
                    <p>Event Date: { val.event_date }</p>
                    <p>{ val.summary }</p>
                </li>
            </div>
            );
          })}
        </section>
      )
    }

}

export default Events;