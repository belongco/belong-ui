// vendor modules
import React from 'react';
import PropTypes from 'prop-types';
import getClassnames from 'classnames';
import _ from 'lodash';
import Popover from '@belong-ui/popover';

import './index.scss';
/**
 * @example ../README.md
 */
export default class SelectDropdown extends React.Component {
  static propTypes = {
    isOpen: PropTypes.bool,
    isInput: PropTypes.bool,
    isDisabled: PropTypes.bool,
    className: PropTypes.string,
    onSelect: PropTypes.func,
    onDropdownOpen: PropTypes.func,
    onDropdownClose: PropTypes.func,
    renderSelectedItem: PropTypes.func,
    renderItem: PropTypes.func,
    renderToggleIcon: PropTypes.func,
    items: PropTypes.array,
  };
  static defaultProps = {
    isOpen: false,
    renderSelectedItem: () => (
      <span>Select Item</span>
    ),
    renderItem: (item) => (
      _.isString(item) ? <span>{item}</span> : <span>Missing renderItem() prop</span>
    ),
    renderToggleIcon: (isInput = false) => (
      isInput ? <i className="fa fa-caret-down"></i> : <i className="fa fa-caret-down"></i>
    ),
  }
  state = {
    isOpen: this.props.isOpen,
  };
  componentWillReceiveProps(nextProps) {
    if (this.props.onDropdownOpen) {
      this.setState({ isOpen: nextProps.isOpen });
    }
  }
  onDropdownOpen = () => {
    if (this.props.isDisabled) {
      return;
    }

    if (this.props.isOpen && this.props.onDropdownOpen) {
      this.props.onDropdownOpen();
    } else {
      this.setState({ isOpen: true });
    }
  }
  onDropdownClose = () => {
    if (this.props.isDisabled) {
      return;
    }

    if (this.props.isOpen && this.props.onDropdownClose) {
      this.props.onDropdownClose();
    } else {
      this.setState({ isOpen: false });
    }
  }
  render() {
    return (
      <Popover
        placement="bottom-end"
      >
        <div className={this.props.isInput ? 'blng-select-dropdown__input' : 'blng-select-dropdown__text--option'}>
          <div
            className={getClassnames('blng-select-dropdown', {
              'blng-select-dropdown--is-input': this.props.isInput,
            }, this.props.className)}
            onClick={() => { this.onDropdownOpen(); }}
          >
            <div
              className={getClassnames('blng-select-dropdown__text', {
                'blng-select-dropdown__text--disabled': this.props.isDisabled,
              })}
            >
              {
                this.props.renderSelectedItem()
              }
            </div>
            <Popover.TARGET>
              <div
                className={getClassnames('blng-select-dropdown__dropdown-icon', {
                  'blng-select-dropdown__dropdown-icon--open': this.state.isOpen,
                  'blng-select-dropdown__dropdown-icon--disabled': this.props.isDisabled,
                })}
              >
                {this.props.renderToggleIcon(this.props.isInput)}
              </div>
            </Popover.TARGET>
          </div>
          <Popover.CONTENT
            isOpen={this.state.isOpen}
          >
            <div className="blng-select-dropdown__content">
              {
                this.props.items.map((item, index) => (
                  <div
                    className="blng-select-dropdown__dropdown-item"
                    onClick={() => {
                      this.props.onSelect(item, index);
                    }}
                  >
                    {this.props.renderItem(item, index)}
                  </div>
                ))
              }
            </div>
          </Popover.CONTENT>
          <Popover.OVERLAY
            isOpen={this.state.isOpen}
            onClick={() => { this.onDropdownClose(); }}
          />
        </div>
      </Popover>
    );
  }
}
