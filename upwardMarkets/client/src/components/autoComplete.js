//import React, { Component } from 'react'
import React, { Component } from 'react'
import Autocomplete from 'react-autocomplete'


// class AutoComplete extends Component {
//   constructor(props){
//     super(props)
//     this.state ={
//       ticker: 'AAPL',
//       disabled: false,
//       searchable: this.props.searchable,
//       selectValue: 'AAPL',
//       clearable: true,
//       rtl: false,
//     }
//   }
//
//   clearValue(e){
//     this.select.setInputValue('')
//   }
//
//   updateValue(newValue){
//     this.setState({
//       selectValue: newValue
//     })
//   }
//
//   focusTickerSelect(){
//     this.select.focus()
//   }
//
// }
//
// AutoComplete.defaultProps = {
//   label: 'Ticker',
//   searchable: true
// }
// export default AutoComplete



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
        // onSelect={value => this.setState({ value })}
      />
    )
  }
}

class Item extends React.Component {
  render () {
    return (
      <div style={{ background: this.props.active ? 'lightgray' : 'white' }}>
        { this.props.children }
      </div>
    );
  }
}

export default AutoComplete