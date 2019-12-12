// vendor modules
import React from 'react';
import PropTypes from 'prop-types';
import getClassNames from 'classnames';
// utility modules
import { keyCodes } from '../../common/constants';
import './index.scss';

/**
 * @example ../README.md
 */
export default class Input extends React.Component {
  static propTypes = {
    id: PropTypes.string,
    isDisabled: PropTypes.bool,
    size: PropTypes.oneOf(['small']),
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    onKeyDown: PropTypes.func,
    onChange: PropTypes.func,
    onEnter: PropTypes.func,
    onEscape: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    inputType: PropTypes.string,
    type: PropTypes.string,
    isTextarea: PropTypes.bool,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    htmlAttributes: PropTypes.object,
  };
  static defaultProps = {
    htmlAttributes: {},
    type: 'text',
    onBlur: () => {},
    onFocus: () => {},
    onEnter: () => {},
    onEscape: () => {},
  };
  state = {
    value: this.props.value,
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.state.value) {
      this.setState({ value: nextProps.value });
    }
  }
  onChange = (e) => {
    if (this.props.isDisabled) {
      return;
    }

    if (this.props.onChange) {
      this.props.onChange(e.target.value);
    } else {
      this.setState({ value: e.target.value });
    }
  }
  onKeyDown = (e) => {
    if (this.props.isDisabled) {
      return;
    }

    if (this.props.isDisabled) {
      return;
    }

    if (this.props.onKeyDown) {
      this.props.onKeyDown(e);
    }

    if (e.keyCode === keyCodes.ENTER) {
      this.props.onEnter(e.target.value);
    }

    if (e.keyCode === keyCodes.ESCAPE) {
      this.props.onEscape(e.target.value);
    }
  }
  onBlur = (e) => {
    if (this.props.isDisabled) {
      return;
    }

    this.props.onBlur(e.target.value);
  }
  onFocus = (e) => {
    if (this.props.isDisabled) {
      return;
    }

    this.props.onFocus(e.target.value);
  }
  focus() {
    if (this.fieldNode && !this.props.isDisabled) {
      this.fieldNode.focus();
    }
  }
  render() {
    return (this.props.isTextarea) ? (
      <textarea
        {...this.props.htmlAttributes}
        ref={(node) => { this.fieldNode = node; }}
        id={this.props.id || ''}
        className={getClassNames('blng-input', 'blng-input--textarea', this.props.className, {
          'blng-input--disabled': this.props.isDisabled,
        })}
        type="text"
        value={this.state.value}
        placeholder={this.props.placeholder}
        onChange={this.onChange}
        onKeyDown={this.onKeyDown}
        onBlur={this.onBlur}
        {...(this.props.isDisabled ? { disabled: 'true' } : {})}
      />
    ) : (
      <input
        {...this.props.htmlAttributes}
        ref={(node) => { this.fieldNode = node; }}
        id={this.props.id || ''}
        className={getClassNames('blng-input', 'blng-input--input', this.props.className, {
          'blng-input--disabled': this.props.isDisabled,
          'blng-input--small': this.props.size === 'small',
        })}
        type={this.props.type}
        value={this.state.value}
        placeholder={this.props.placeholder}
        onChange={this.onChange}
        onKeyDown={this.onKeyDown}
        onBlur={this.onBlur}
        onFocus={this.onFocus}
        {...(this.props.isDisabled ? { disabled: 'true' } : {})}
      />
    );
  }
}
