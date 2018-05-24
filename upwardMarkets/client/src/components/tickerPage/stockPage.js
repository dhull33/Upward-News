import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
// import SearchNewsBar from '../searchBar'


class TickerPage extends Component{
  constructor(props){
    super(props)
    this.state = {
      symbol: this.props.value
    }
  }

  getTickerData(){
    console.log(this.props.value)
  }

    componentDidMount(){
    this.getTickerData()
    }

  render(){
    return (
      <div>
        {/*<SearchNewsBar />*/}
        <Container>
        </Container>
        <h1>Hello</h1>
      </div>
    )
  }
}

export default TickerPage