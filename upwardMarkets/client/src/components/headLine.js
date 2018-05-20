
import { Media, Container, Row, Col } from 'reactstrap'
// import PropTypes from 'prop-types'
import React, { Component } from 'react';

class HeadLine extends Component {
  render() {

    return (
      <Container>
        <Row>
          <Col lg='auto'>
            <Media>
            <Media left>
              <Media object className='resizeHeadLine' src={this.props.headLine.urlToImage} alt="Headline News"/>
            </Media>
            <Media right body>
              <Media heading className='Heading'>
                {this.props.headLine.title}
              </Media>
              <div className='dottedLine'></div>
              <p>{this.props.headLine.description}</p>
            </Media>
            </Media>
          </Col>
        </Row>
      </Container>
    )
  }
}


export default HeadLine;
