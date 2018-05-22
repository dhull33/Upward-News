import React, { Component } from 'react'
import Autocomplete from 'react-autocomplete'


class AutoComplete extends Component {
  constructor(props){
    super(props)
    this.state = {
      value: ''
    }
  }
  render(){
    return(
      <Autocomplete
        items={this.props.items}
        shouldItemRender = {(item, value) => item.toLowerCase().indexOf(value.toLowerCase()) > -1}
        getItemValue = {item => item.data}
        renderItem={(item, highlighted) =>
          <div key={item}
               style={{ backgroundColor: highlighted ? '#eee' : 'transparent'}}>
            {item}
          </div>
        }
        value={this.state.value}
        onChange={e => this.setState({ value: e.target.value })}
        onSelect={value => this.setState({ value })}
      />
    )
  }
}

export default AutoComplete