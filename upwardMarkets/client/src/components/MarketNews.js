import React, { Component } from 'react'
import MarketItem from './MarketItem'

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
      <div>
        {marketItems}
      </div>
    )
  }

}

export default MarketNews