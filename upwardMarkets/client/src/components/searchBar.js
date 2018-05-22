import React, { Component } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input,
  Button,
  Form,
  FormGroup} from 'reactstrap'

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


  render() {
    return (
      <div>
        <Navbar className='fixed-top whiteBackground' light>
          <NavbarBrand href="/" className="mr-auto">UpwardMarkets</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/components/">Login</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">Sign Up</NavLink>
              </NavItem>
              <NavItem>
              <Form  inline className='SearchNews'>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                  <Input className='form-control' bsSize='sm' type='searchNews' name='searchNews'  placeholder='Ticker Symbol'/>

                <Button size='sm' type='submit'>&#x1f50d;</Button>
                </FormGroup>
              </Form>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default SearchNewsBar
