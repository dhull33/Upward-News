import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'



class TickerPage extends Component{
  constructor(props){
    super(props)
    this.state = {
      symbol: sessionStorage.getItem('tickerSymbol')
    }
  }

  getTickerSymbol(){
    const tickerSymbol2 = sessionStorage.getItem('tickerSymbol')
    this.setState({
      symbol: tickerSymbol2
    })
  }

  getTickerData(){
    const url = 'https://api.iextrading.com/1.0/stock/'
    const symbol = sessionStorage.getItem('tickerSymbol')
    const batch = '/batch?types=quote,news,financials,earnings,chart&range=1d&last=5'

    fetch(url + symbol + batch)
      .then(res => res.json())
      .then(data => {
        this.setState(
          {
            companyName: data.quote.companyName,
            primaryExchange: data.quote.primaryExchange,
            sector: data.quote.sector,
            latestPrice: data.quote.latestPrice,
            latestVolume: data.quote.latestVolume,
            changePercent: data.quote.changePercent,
            marketCap: data.quote.marketCap,
            peRatio: data.quote.peRatio,
            week52High: data.quote.week52High,
            week52Low: data.quote.week52Low,
            ytdChange: data.quote.ytdChange,
            news: data.news,
            financials: data.financials,
            earnings: data.earnings,
            chart: data.chart,
            color: ''
          }
        )
      })
      .then(()=> {
        console.log(this.state)
        sessionStorage.clear()
      })
      .catch(err => console.log(err))
  }

  setPercentColor() {
    const percentChange = parseFloat(this.state.changePercent) * 100
    if (percentChange < 0) {
      this.setState({
        color: 'red'
      })
    }
    if(percentChange > 0){
      this.setState({
        color: 'green'
      })
    }
  }

  componentDidMount(){
    this.getTickerData()
    this.setPercentColor()
  }

  render(){
    return (
      <Container fluid className='stockPage'>
        <Row>
          <Col>
            <h5><b>{this.state.symbol}:US</b></h5>
            <h6 className='companyName'> {this.state.companyName}</h6>
            <p className="sector text-muted">{this.state.sector}</p>
          </Col>
        </Row>
        <Row>
          <Col xs='6'>
            <h1>${this.state.latestPrice}</h1>
          </Col>
          <Col xs='6'>
            <p className='percentChange' style={{color: this.setPercentColor.bind(this)}}>{this.state.changePercent}%</p>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default TickerPage