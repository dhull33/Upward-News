import React, { Component } from 'react'
import MarketItem from './MarketItem'
import {Container } from 'reactstrap'

class MarketNews extends Component{
  render(){

    let marketItems
    if(this.props.markNews){
      marketItems = this.props.markNews.map( (marketItem) =>{
        return(
          <MarketItem key={marketItem.title} marketItem={marketItem} />
        )
      })
    }
    return(
      <Container>
        {marketItems}
      </Container>

    )
  }

}

export default MarketNews