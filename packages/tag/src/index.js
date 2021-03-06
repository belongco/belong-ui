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
    icon: PropTypes.element,
    iconPlacement: PropTypes.oneOf(['left', 'right']),
    onClick: PropTypes.func,
    onHover: PropTypes.func,
  };
  static defaultProps = {
    iconPlacement: 'left',
  }
  state = {};

  onClick = (e) => {
    if (_.isFunction(this.props.onClick)) {
      this.props.onClick(e);
    }
  }

  onHover = (e) => {
    if (_.isFunction(this.props.onHover)) {
      this.props.onHover(e);
    }
  }

  render() {
    const { variant, className, icon, iconPlacement, children, onClick, onHover } = this.props;

    return (
      <div
        className={getClassNames('blng-tag', {
          [`blng-tag__${variant}`]: _.isString(variant),
          'blng-tag__clickable': _.isFunction(onClick),
          'blng-tag__hoverable': _.isFunction(onHover),
          [`blng-tag__icon-placement_${iconPlacement}`]: _.isString(iconPlacement),
          [className]: !_.isEmpty(className),
        })}
        onClick={(e) => { this.onClick(e); }}
        onMouseOver={(e) => { this.onHover(e); }}
      >
        {icon && (
          <div className="blng-tag__icon">{icon}</div>
        )}
        <div className="blng-tag__content">{children}</div>
      </div>
    );
  }
}
