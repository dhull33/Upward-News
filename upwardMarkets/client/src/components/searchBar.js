import React, { Component } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button} from 'reactstrap'

import AutoComplete from './autoComplete'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import TickerPage from './tickerPage/stockPage'

class SearchNewsBar extends Component {
  constructor(props) {
    super(props)
    this.toggleNavbar = this.toggleNavbar.bind(this)
    this.state = {
      collapsed: true,
      items: []
    }
  }

  toggleNavbar(){
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  handleSubmit(e){
    e.preventDefault();
  }


  render() {
    return (
      <div>
        <Navbar className='fixed-top whiteBackground' light>
          <NavbarBrand href="/" className="mr-auto">UpwardMarkets</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>

            <Nav>
              <NavItem>
                <AutoComplete tickers={this.props.tickers}/>
                <Button size='sm' type='submit'><Link to='/ticker'>&#x1f50d;</Link></Button>
                {/*<Route exact path="/ticker" component={TickerPage}/>*/}
              </NavItem>
            </Nav>

          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default SearchNewsBar

// <Form  inline className='SearchNews'>
//   <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
//   <Input className='form-control' bsSize='sm' type='searchNews' name='searchNews'  placeholder='Ticker Symbol'/>
//   <Button size='sm' type='submit'>&#x1f50d;</Button>
// </FormGroup>
// </Form>
