import React, { Component } from 'react'
import Flat from './flat'

class FlatList extends Component {

  renderList = () => {
    return this.props.flats.map((flat) => {
      return <Flat
        name = {flat.name}
        imageUrl = {flat.imageUrl}
        price = {flat.price}
        priceCurrency = {flat.priceCurrency}
        lat = {flat.lat}
        lng = {flat.lng}
        key = {flat.id}
        id = {flat.id}
        selectFlat={this.props.selectFlat}
        selectedFlatId={this.props.selectedFlatId}
      />
    })
  }

  render() {
    return (
      <div className="flat-list">
        {this.renderList()}
      </div>
    );
  }
}

export default FlatList