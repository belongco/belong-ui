/* eslint-disable no-nested-ternary */
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
    variant: PropTypes.oneOf(['default', 'warning', 'removable']),
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
      PropTypes.array,
    ]),
    icon: PropTypes.string,
    iconPlacement: PropTypes.oneOf(['left', 'right']),
    isIconClickable: PropTypes.bool,
    onIconClick: PropTypes.func,
    isClickable: PropTypes.bool,
    isHoverable: PropTypes.bool,
    onClick: PropTypes.func,
  };
  static defaultProps = {
    iconPlacement: 'left',
    isClickable: false,
    isIconClickable: false,
  }
  state = {};

  onClick = (e) => {
    if (this.props.isClickable && _.isFunction(this.props.onClick)) {
      this.props.onClick(e);
    }
  }

  onIconClick = (e) => {
    if (this.props.isIconClickable && _.isFunction(this.props.onIconClick)) {
      this.props.onIconClick(e);
    }
  }

  render() {
    const { variant, className, icon, iconPlacement, isIconClickable, children, isClickable, isHoverable } = this.props;

    return (
      <div
        className={getClassNames(`blng-tag${!_.isEmpty(className) ? ` ${className}` : ''}`, {
          [`blng-tag__${variant}`]: _.isString(variant),
          'blng-tag__clickable': isClickable,
          'blng-tag__hoverable': isHoverable,
          'blng-tag__icon-clickable': isIconClickable,
        })}
        onClick={(e) => { this.onClick(e); }}
      >
        {iconPlacement === 'left' ? (
          _.isString(icon) ? (
            <React.Fragment>
              <i
                className={icon}
                onClick={(e) => { this.onIconClick(e); }}
              />
              {children}
            </React.Fragment>
          ) : children
        ) : (
          _.isString(icon) ? (
            <React.Fragment>
              {children}
              <i
                className={icon}
                onClick={(e) => { this.onIconClick(e); }}
              />
            </React.Fragment>
          ) : children
        )}
      </div>
    );
  }
}
