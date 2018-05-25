//import React, { Component } from 'react'
import React, { Component } from 'react'
import Autocomplete from 'react-autocomplete'

class AutoComplete extends Component {
  constructor(props){
    super(props)
    this.state = {
      value: ''
    }
  }
  onChange(event, value){
    this.setState({ value });

  }

  render(){
    const { value } = this.state
    return(
      <Autocomplete
        items={this.props.tickers}
        shouldItemRender = {(items, value) => items.symbol.toLowerCase().indexOf(value.toLowerCase()) > -1}
        getItemValue = {item => item.symbol}
        renderItem={(item, active) =>
          <Item active={ active }> { item.symbol} </Item>
        }
        value={ value }
        onChange={ (...args) => this.onChange(...args) }
        onSelect={(value) => {
          this.setState({ value })
          sessionStorage.setItem('tickerSymbol', value)
        }}
      />
    )
  }
}

class Item extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      key: Math.floor(Math.random() * 8000)
    }
  }
  render () {

    return (
      <div>
        <div key = {this.state.key} style={{ background: this.props.active ? 'lightgray' : 'white' }}>
          { this.props.children }
        </div>
      </div>

    );
  }
}

export default AutoComplete