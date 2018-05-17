
import { Media } from 'reactstrap'
import PropTypes from 'prop-types'
import React, { Component } from 'react';

const HeadLine = () => {
      return(
      <Media>
        <Media left href="#">
          <Media object data-src={this.props.mainHeadLine.urlToImage} alt="Headline News" />
        </Media>
        <Media body>
          <Media heading>
            {this.props.mainHeadLine.title}
          </Media>
          {this.props.mainHeadLine.description}
        </Media>
      </Media>
      )

}
Media.PropTypes = {
  body: PropTypes.bool,
  bottom: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  heading: PropTypes.bool,
  left: PropTypes.bool,
  list: PropTypes.bool,
  middle: PropTypes.bool,
  object: PropTypes.bool,
  right: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  top: PropTypes.bool,
};


export default HeadLine;
