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
export default class Tag extends React.Component {
  static propTypes = {
    className: PropTypes.string,
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
    isClickable: false,
  }
  state = {};

  onClick = (e) => {
    if (this.props.isClickable && _.isFunction(this.props.onClick)) {
      this.props.onClick(e);
    }
  }

  render() {
    const { className, children, isClickable, isHoverable } = this.props;

    return (
      <div
        className={getClassNames(`blng-tag${!_.isNull(className) ? ` ${className}` : ''}`, {
          'blng-tag__clickable': isClickable,
          'blng-tag__hoverable': isHoverable,
        })}
        onClick={(e) => { this.onClick(e); }}
      >
        {children}
      </div>
    );
  }
}
