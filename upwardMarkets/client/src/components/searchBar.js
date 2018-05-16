import React, { Component } from 'react'
import { Button, Input, Navbar, NavbarBrand } from 'reactstrap'

export default class SearchNewsBar extends Component {
  render () {
    return (
      <div>
        <Navbar expand='md'>
          <Input type='searchNews' name='searchNews' id='SearchNews' placeholder='Search for News' />
          {''}
          <Button>Submit</Button>
        </Navbar>

      </div>

    )
  }
}
