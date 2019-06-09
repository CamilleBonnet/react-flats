import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './marker'

class SimpleMap extends Component {
  gpsCode = () => {
    const testValue = {
      lat: this.props.selectedFlat ? this.props.selectedFlat.lat : 59.955413,
      lng: this.props.selectedFlat ? this.props.selectedFlat.lng : 30.337844,
    }

    console.log(testValue, this.props)

    return testValue
  }

  static defaultProps = {
    center: {
      lat: 49,
      lng: 2
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBUmdQTcGjYVxDAXJOIpK-gH23D4ebOwzc" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker
            lat={this.gpsCode().lat}
            lng={this.gpsCode().lng}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;