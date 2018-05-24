import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'



class TickerPage extends Component{
  constructor(props){
    super(props)
    this.state = {
      symbol: ''
    }
  }

  getTickerData(){
    const tickerSymbol = localStorage.getItem('tickerSymbol')
    this.setState({
      symbol: tickerSymbol
    })
  }

    componentDidMount(){
      this.getTickerData()
    }

  render(){
    return (
      <div>

        <Container>
          <h1>{this.state.symbol} Yoooooo</h1>
        </Container>
        <h1>Hello</h1>
      </div>
    )
  }
}

export default TickerPage