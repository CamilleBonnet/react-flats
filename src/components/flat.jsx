import React, { Component } from 'react'
window.$ = window.jQuery = require('jquery')

class Flat extends Component {
  constructor(props) {
    super(props)
  }

  clickHandler = (event) => {
    const lat = $(event.currentTarget).data('lat')
    const lng = $(event.currentTarget).data('lng')
    const id = $(event.currentTarget).data('id')
    this.props.selectFlat(id, { lat: lat, lng: lng})
  }

  classCard = () => {
    let classes = "card"
    console.log(this.props)
    if(this.props.selectedFlatId == this.props.id){
      classes += " active"
    }
    return classes
  }

  render() {
    const imageStyle = {
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(' + this.props.imageUrl + ')'
    }

    return (
      <div
        className={this.classCard()}
        style={imageStyle}
        onClick={this.clickHandler}
        data-lat={this.props.lat}
        data-lng={this.props.lng}
        data-id={this.props.id}
      >
        <div className="card-category">{this.props.price} {this.props.priceCurrency}</div>
        <div className="card-description">
           <h2>{this.props.name}</h2>
        </div>
        <a className="card-link" href="#"></a>
      </div>
    )
  }
}

export default Flat