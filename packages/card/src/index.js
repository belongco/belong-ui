// vendor modules
import React from 'react';
import PropTypes from 'prop-types';
import getClassnames from 'classnames';
// css modules
import './index.scss';

/**
 * @example ../README.md
 */
export default class Card extends React.Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
      PropTypes.array,
    ]),
    isClickable: PropTypes.bool,
    isHoverable: PropTypes.bool,
  };
  static defaultProps = {
    isClickable: false,
    isHoverable: false,
  }
  state = {};

  render() {
    return (
      <div
        className={getClassnames('blng-card', {
          'blng-card__hover': this.props.isHoverable,
          'blng-card__clickable': this.props.isClickable,
        })}
      >
        {this.props.children}
      </div>
    );
  }
}
