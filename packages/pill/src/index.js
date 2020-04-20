// vendor modules
import React from 'react';
import PropTypes from 'prop-types';
import getClassNames from 'classnames';
import _ from 'lodash';
// css modules
import './index.scss';

/**
 * @example ../README.md
 */
export default class Pill extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    variant: PropTypes.oneOf(['outlined', 'raised']),
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
      PropTypes.array,
    ]),
    isClickable: PropTypes.bool,
    isHoverable: PropTypes.bool,
    onClick: PropTypes.func,
  };
  static defaultProps = {
    variant: 'raised',
    isClickable: false,
  }
  state = {};

  onClick = (e) => {
    if (this.props.isClickable && _.isFunction(this.props.onClick)) {
      this.props.onClick(e);
    }
  }

  render() {
    const { className, children, variant, isClickable, isHoverable } = this.props;

    return (
      <div
        className={getClassNames('blng-pill', className, {
          [`blng-pill__${variant}`]: _.isString(variant),
          'blng-pill__clickable': isClickable,
          'blng-pill__hoverable': isHoverable,
        })}
        onClick={(e) => { this.onClick(e); }}
      >
        {children}
      </div>
    );
  }
}
