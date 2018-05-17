import React from 'react'
import { Jumbotron, Container } from 'reactstrap'

const Header = (props) => {
  return(
    <div>
      <Jumbotron fluid className='whiteBackground'>
        <Container fluid >
          <h1 id='UpwardMarkets' className='display-2'><b>Upward Markets</b></h1>

        </Container>
      </Jumbotron>
    </div>
  )
}

export default Header