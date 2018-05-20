import React, { Component } from 'react'
import { Card, CardImg, CardTitle, CardText, CardSubtitle, CardBody } from 'reactstrap'

class MarketItem extends Component{
  render(){
    return(
      <Card>
        <CardImg top width='25%' height='10%' src={this.props.marketItem.urlToImage} alt='News Image' />
        <CardBody>
          <CardTitle>{this.props.marketItem.title}</CardTitle>
          <a href={this.props.marketItem.url}>
            <CardText>
              {this.props.marketItem.description}
            </CardText>
          </a>
          {/*<a href={this.props.marketItem.url}>Source</a>*/}
        </CardBody>
      </Card>
    )

  }
}

export default MarketItem