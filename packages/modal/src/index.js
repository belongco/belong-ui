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
    type: PropTypes.oneOf(['light', 'dark']),
    isOpen: PropTypes.bool,
  };
  static defaultProps = {
    type: 'dark',
  };

  componentDidMount() {
    document.addEventListener('keydown', this.onEscape, false);
    document.addEventListener('click', this.onClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onEscape, false);
    document.removeEventListener('click', this.onClick, false);
  }

  onEscape = (event) => {
    if (event.keyCode === keyCodes.ESCAPE) {
      this.props.onEscape(event);
    }
  }

  onClick = (event) => {
    const element = document.getElementById('blng-modal__overflow');

    if (element === event.target) {
      this.props.onEscape(event);
    }
  }

  render() {
    const { title, onClose, children, type, hideCloseIcon, isOpen } = this.props;

    return (
      <div
        className={getClassnames('blng-modal', {
          'blng-modal__closed': !isOpen,
        })}
      >
        <div
          className="blng-modal__content"
          id="blng-modal__content"
        >
          <div className="blng-modal__content-header">
            <div className="blng-modal__content-header__title">{_.isString(title) ? title : null}</div>
            {hideCloseIcon ? (
              <span
                className="blng-modal__content-header__close"
                onClick={() => { onClose(); }}
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
