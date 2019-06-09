import React, { Component } from 'react'
import flats from '../data/flats.js'
import FlatList from './components/flat_list.jsx'
import SimpleMap from './components/simple_map.jsx'
import $ from 'jquery';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      flats: flats,
      selectedFlat: {
        id: null,
        lat: '',
        lng: ''
      }
    }
  }

  selectFlat = (id, gps) => {
    this.setState( {
      selectedFlat: {
        id: id,
        lat: gps.lat,
        lng: gps.lng
      }
    })
  }
  render() {
    return (
      <div>
        <FlatList
          flats={this.state.flats}
          selectFlat={this.selectFlat}
          selectedFlatId={this.state.selectedFlat.id}
        />
        <div className="map-container">
          <SimpleMap selectedFlat={this.state.selectedFlat}/>
        </div>
      </div>
    )
  }
}

export default App
