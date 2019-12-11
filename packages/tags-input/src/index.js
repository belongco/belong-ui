// vendor modules
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
// react modules
import Popover from '@belong-ui/popover';
import Suggestions from '@belong-ui/suggestions';
// utility modules
// import { keyCodes } from '../../common/constants';


import './index.scss';

/**
 * @example ../README.md
 */
export default class TagsInput extends React.Component {
  static propTypes = {
    isOpen: PropTypes.bool,
    isDisabled: PropTypes.bool,
    className: PropTypes.string,
    onDropdownClose: PropTypes.func,
    selectedItem: PropTypes.array,
    searchValue: PropTypes.string,
    searchPlaceholder: PropTypes.string,
    onSearchChange: PropTypes.func,
    onSearchClick: PropTypes.func,
    isSearchLoading: PropTypes.bool,
    messageIfNoSearchResults: PropTypes.string,
    suggestionsDisplayKey: PropTypes.string,
    onChange: PropTypes.func,
    suggestions: PropTypes.object,
    OnTagRemove: PropTypes.func,
  };
  static defaultProps = {
    isOpen: false,
  }
  state = {
    isOpen: this.props.isOpen,
  };

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

  onInputClick = () => {
    this.searchInputInstance.focus();
  };

  render() {
    return (
      <div className="blng-tags-input">
        <Popover
          placement="start"
        >
          <Suggestions
            suggestions={this.props.suggestions}
            onSuggestionSelect={
              (suggestion) => {
                this.setState({ isOpen: false });
                if (!_.isEmpty(this.props.searchValue)) {
                  this.props.onChange(suggestion);
                }
              }
            }
            onKeyDown={(e) => { console.log(e); }}
          >
            <Popover.TARGET>
              <div
                className="blng-tags-input__items"
                onClick={() => { this.onInputClick(); }}
              >
                {_.map(this.props.selectedItem, (item, index) => (
                  <React.Fragment>
                    {!_.isEmpty(item) ? (
                      <span
                        className="blng-tags-input__tag"
                        key={index}
                      >
                        {item}
                        <i
                          className="fa fa-times"
                          onClick={() => { this.props.OnTagRemove(index); }}
                        />
                      </span>
                    ) : null}
                  </React.Fragment>
                ))}
                <Suggestions.INPUT
                  value={this.props.searchValue}
                  onChange={(newValue) => {
                    this.props.onSearchChange(newValue);
                    if (!_.isEmpty(this.props.suggestions)) {
                      this.setState({
                        isOpen: true,
                      });
                    }
                  }}
                  ref={(ref) => {
                    this.searchInputInstance = ref;
                  }}
                  placeholder={this.props.searchPlaceholder}
                />
              </div>
            </Popover.TARGET>
            <Popover.CONTENT
              isOpen={this.state.isOpen}
            >
              <div className="blng-select-dropdown__content">
                <Suggestions.CONTAINER
                  className="blng-searchable-select__suggestions"
                  isLoading={this.props.isSearchLoading}
                  messageIfEmpty={this.props.messageIfNoSearchResults}
                  suggestionClassname="blng-searchable-select__suggestion"
                  suggestionsDisplayKey={this.props.suggestionsDisplayKey}
                  onSuggestionClick={
                    (suggestion) => {
                      this.setState({ isOpen: false });
                      this.props.onChange(suggestion);
                    }
                  }
                />
              </div>
            </Popover.CONTENT>
            <Popover.OVERLAY
              isOpen={this.state.isOpen}
              onClick={() => { this.onDropdownClose(); }}
            />
          </Suggestions>
        </Popover>
      </div>
    );
  }
}
