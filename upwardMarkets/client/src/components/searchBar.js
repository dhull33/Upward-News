import React, { Component } from 'react'
import { Button, Input, Navbar, NavbarBrand } from 'reactstrap'

class SearchNewsBar extends Component {
  constructor(props) {
    super(props)
    this.toggleNavbar = this.toggleNavbar.bind(this)
    this.state = {
      collapsed: true
    }
  }

  toggleNavbar(){
    this.setState({
      collapsed: !this.state.collapsed
    })
  }


  render () {
    return (
      <div>
        <Navbar expand='md' className='SearchNews' >
          <NavbarBrand href='/'><h1>Upward Markets</h1></NavbarBrand>
          <span>
            <Input type='searchNews' name='searchNews'  placeholder='Search for News'/>
          </span>
          <Button size='sm'>Submit</Button>
        </Navbar>

      </div>

    )
  }
}

export default SearchNewsBar
