import React, { Component } from 'react'

export default class Header extends Component {
  constructor() {
    super()

   

    var today = new Date(),

     text = today.toDateString();

   

    this.state = {

      currentDate: text

    }
  }
  render() {
    let {title,description,imageURL,newsUrl } = this.props;
    return (
      /*<div>
      <h1 className ="tileheader text-center">News Monkey</h1>
        <p className="text-center">

          { this.state.currentDate } </p>*/
          <div>
          <div class="card bg-dark text-white  mx-auto my-3 ">
  <img className="card-img" src={imageURL} alt="Card image"/>
  <div className="card-img-overlay">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    
  </div>
</div>


       
        
      </div>
    )
  }

}