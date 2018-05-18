import React, { Component } from 'react'
import { Card, CardImg, CardTitle, CardText, CardSubtitle, CardBody } from 'reactstrap'

class MarketItem extends Component{
  render(){
    return(
      <Card>
        <CardImg top width='100%' src={this.props.marketItem.urlToImage} alt='News Image' />
        <CardBody>
          <CardTitle>{this.props.marketItem.title}</CardTitle>
          <CardText>{this.props.marketItem.description}</CardText>
        </CardBody>
      </Card>
    )

  }
}

export default MarketItem