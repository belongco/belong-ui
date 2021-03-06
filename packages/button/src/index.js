// vendor modules
import React from 'react';
import PropTypes from 'prop-types';
import getClassnames from 'classnames';
import _ from 'lodash';

import './index.scss';

/**
 * @example ../README.md
 */
export default class Button extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
      PropTypes.array,
    ]),
    size: PropTypes.oneOf(['small']),
    type: PropTypes.oneOf(['brand', 'primary', 'warning', 'green']),
    onClick: PropTypes.func,
    isDisabled: PropTypes.bool,
    dropdownItems: PropTypes.array,
    dropdownItemDisplayKey: PropTypes.string,
    dropdownHelpText: PropTypes.string,
    isDropdownOpen: PropTypes.bool,
    onDropdownOpen: PropTypes.func,
    onDropdownBlur: PropTypes.func,
    onDropdownItemSelect: PropTypes.func,
    keyCodeTrigger: PropTypes.number,
    onKeyCodeTrigger: PropTypes.func,
    dropdownListTemplate: PropTypes.func,
  };

  onClick = (e) => {
    if (!this.props.isDisabled && _.isFunction(this.props.onClick)) {
      this.props.onClick(e);
    }
  }

  render() {
    const { size, type } = this.props;

    return (
      <button
        className={getClassnames('blng-button', this.props.className, {
          [`blng-button--size-${size}`]: _.isString(size),
          [`blng-button--type-${type}`]: _.isString(type),
          'blng-button--disabled': this.props.isDisabled,
        })}
        onClick={(e) => { this.onClick(e); }}
      >
        {this.props.children}
      </button>
    );
  }
}
