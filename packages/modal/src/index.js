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
    isCloseOption: PropTypes.bool,
    onKeyDown: PropTypes.func,
    onModalClose: PropTypes.func,
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
      PropTypes.array,
    ]),
    type: PropTypes.oneOf(['light', 'dark']),
    isModalOpen: PropTypes.bool,
  };
  static defaultProps = {
    type: 'dark',
  };

  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown, false);
    document.addEventListener('click', this.onClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown, false);
    document.removeEventListener('click', this.onClick, false);
  }

  onKeyDown = (event) => {
    if (event.keyCode === keyCodes.ESCAPE) {
      this.props.onKeyDown(event);
    }
  }

  onClick = (event) => {
    const element = document.getElementById('blng-modal__overflow');

    if (element === event.target) {
      this.props.onKeyDown(event);
    }
  }

  render() {
    const { title, onModalClose, children, type, isCloseOption, isModalOpen } = this.props;

    return (
      <div
        className={getClassnames('blng-modal', {
          'blng-modal__closed': !isModalOpen,
        })}
      >
        <div
          className="blng-modal__content"
          id="blng-modal__content"
        >
          <div className="blng-modal__content-header">
            <div className="blng-modal__content-header__title">{_.isString(title) ? title : null}</div>
            {isCloseOption ? (
              <span
                className="blng-modal__content-header__close"
                onClick={() => { onModalClose(); }}
              >
                &times;
              </span>
            ) : null}
          </div>
          <div className="blng-modal__content-body">
            {children}
          </div>
        </div>
        {isModalOpen ? (
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
