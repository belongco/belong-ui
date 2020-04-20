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
    variant: PropTypes.oneOf(['default', 'success', 'warning', 'critical', 'tab', 'counter', 'step']),
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
      PropTypes.array,
    ]),
    icon: PropTypes.element,
    iconPlacement: PropTypes.oneOf(['left', 'right']),
    stepIndex: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    isActive: PropTypes.bool,
    onClick: PropTypes.func,
    onHover: PropTypes.func,
  };
  static defaultProps = {
    variant: 'default',
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
    const { className, children, variant, icon, iconPlacement, stepIndex, isActive, onClick, onHover } = this.props;

    return (
      <div
        className={getClassNames('blng-pill', {
          [`blng-pill__variant-${variant}`]: _.isString(variant),
          [`blng-pill__icon-placement_${iconPlacement}`]: _.isString(iconPlacement),
          [`blng-pill__variant-${variant}-active`]: isActive,
          'blng-pill__clickable': _.isFunction(onClick),
          'blng-pill__hoverable': _.isFunction(onHover),
          [className]: !_.isEmpty(className),
        })}
        onClick={(e) => { this.onClick(e); }}
        onMouseOver={(e) => { this.onHover(e); }}
      >
        {icon && (
          <div className="blng-pill__icon">{icon}</div>
        )}
        {stepIndex && (
          <div
            className={getClassNames('blng-pill__step-index', {
              'blng-pill__step-index__active': isActive,
            })}
          >
            {stepIndex}
          </div>
        )}
        <div className="blng-pill__content">{children}</div>
      </div>
    );
  }
}
