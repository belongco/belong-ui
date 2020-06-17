// vendor modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getClassnames from 'classnames';
import _ from 'lodash';
// utility modules
import { keyCodes } from '../../common/constants';
// css modules
import './index.scss';

/**
 * @example ../README.md
 */
export default class Modal extends Component {
  static propTypes = {
    title: PropTypes.string,
    hideCloseIcon: PropTypes.bool,
    onEscape: PropTypes.func,
    onClose: PropTypes.func,
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
      PropTypes.array,
    ]),
    className: PropTypes.string,
    type: PropTypes.oneOf(['light', 'dark']),
    isOpen: PropTypes.bool,
  };
  static defaultProps = {
    hideCloseIcon: false,
    type: 'dark',
  };

  componentDidMount() {
    document.addEventListener('keydown', this.onEscape, false);
    document.addEventListener('click', this.onClick, false);
  }

  componentWillReceiveProps(nextProps, preProps) {
    if (!_.isEqual(nextProps.isOpen, preProps.isOpen) && nextProps.isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onEscape, false);
    document.removeEventListener('click', this.onClick, false);
  }

  onEscape = (event) => {
    if (event.keyCode === keyCodes.ESCAPE) {
      document.body.style.overflow = 'auto';
      this.props.onEscape(event);
    }
  }

  onClick = (event) => {
    const element = document.getElementById('blng-modal__overflow');

    if (element === event.target) {
      document.body.style.overflow = 'auto';
      this.props.onEscape(event);
    }
  }

  onClose = () => {
    if (_.isFunction(this.props.onClose)) {
      document.body.style.overflow = 'auto';
      this.props.onClose();
    }
  }

  render() {
    const { title, children, type, hideCloseIcon, isOpen, className } = this.props;

    return (
      <div
        className={getClassnames('blng-modal', {
          'blng-modal__closed': !isOpen,
          [className]: !_.isEmpty(className),
        })}
      >
        <div
          className="blng-modal__content"
          id="blng-modal__content"
        >
          <div className="blng-modal__content-header">
            {title && (
              <div className="blng-modal__content-header__title">{title}</div>
            )}
            {!hideCloseIcon ? (
              <span
                className="blng-modal__content-header__close"
                onClick={() => { this.onClose(); }}
              >
                &times;
              </span>
            ) : null}
          </div>
          <div className="blng-modal__content-body">
            {children}
          </div>
        </div>
        {isOpen ? (
          <div
            className={getClassnames('blng-modal__overflow', {
              [`blng-modal__overflow-type-${type}`]: type,
            })}
            id="blng-modal__overflow"
          />
        ) : null}
      </div>
    );
  }
}
