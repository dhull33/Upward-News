import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import {Line} from 'react-chartjs-2'


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
      .then(()=>{
        const chartState= this.state.chart
        let closePrice = []
        let labels = []
        for(let i=0; i < chartState.length; i++){
          if(this.state.chart[i].high !== -1) {
            closePrice.push(this.state.chart[i].high)
          }else{
            closePrice.push(closePrice[i-1])
          }
          labels.push(this.state.chart[i].label)
        }
        console.log(closePrice)
        this.setState({
          data:
            {
              labels: labels,
             datasets: [
              {
                label: '1day',
                fill: true,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: closePrice
              }
            ]}

        })
      })
      .then(()=>{
        let newsState = this.state.news
        let newsHeadLine = []
        let newsUrl = []
        for(let j =0; j < newsState.length; j ++){
          newsHeadLine.push(this.state.news[j].headline)
          newsUrl.push(this.state.news[j].url)
        }
        console.log(newsHeadLine)
        this.setState({
          newsHeadline0: newsHeadLine[0],
          newsHeadline1: newsHeadLine[1],
          newsHeadline2: newsHeadLine[2],
          newsHeadline3: newsHeadLine[3],
          newsHeadline4: newsHeadLine[4],
          url0: newsUrl[0],
          url1: newsUrl[1],
          url2: newsUrl[2],
          url3: newsUrl[3],
          url4: newsUrl[4],
        })
      })
      .then(()=> {
        console.log(this.state)
        sessionStorage.clear()
      })
      .catch(err => console.log(err))
  }

  setPercentColor() {
    const percentChange = parseFloat(this.state.changePercent)
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
  componentWillMount(){
    this.setPercentColor()
  }

  componentDidMount(){
    this.getTickerData()
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
            <p className='percentChange' style={{color: this.state.color}}>{this.state.changePercent}%</p>
          </Col>
        </Row>
        <Line data={this.state.data}/>
        <Container>
          <Row>
            <h4 className='dottedLine'>News</h4>
            <br/>
            <h6 className='dottedLine'><a className='cardStyle' href={this.state.url0} target="_blank">{this.state.newsHeadline0}</a></h6>
            <br/>
            <h6 className='dottedLine'><a className='cardStyle' href={this.state.url1} target="_blank">{this.state.newsHeadline1}</a></h6>
            <br/>
            <h6 className='dottedLine'><a className='cardStyle' href={this.state.url2} target="_blank">{this.state.newsHeadline2}</a></h6>
            <br/>
            <h6 className='dottedLine'><a className='cardStyle' href={this.state.url3} target="_blank">{this.state.newsHeadline3}</a></h6>
            <br/>
            <h6 className='dottedLine'><a className='cardStyle' href={this.state.url4} target="_blank">{this.state.newsHeadline4}</a></h6>
            <br/>
          </Row>
          <Row>
            <Col xs='5'>
              <h6 className='text-muted'>52 Week High</h6>
              <p className='dottedLine'>{this.state.week52High}</p>
            </Col>
            <Col xs='5'>
              <h6 className='text-muted'>52 Week Low</h6>
              <p className='dottedLine'>{this.state.week52Low}</p>
            </Col>
          </Row>
        </Container>
      </Container>

    )
  }
}

export default TickerPage