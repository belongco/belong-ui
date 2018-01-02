// vendor modules
import React from 'react';
import PropTypes from 'prop-types';
import getClassnames from 'classnames';
// react modules
import Popover from '@belong-ui/popover';
import Suggestions from '@belong-ui/suggestions';

import './index.scss';


/**
 * @example ../README.md
 */
export default class SearchableSelect extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    helpText: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func,
    searchValue: PropTypes.string,
    onSearchChange: PropTypes.func,
    renderSelectedItem: PropTypes.func,
    suggestions: PropTypes.array,
    suggestionsDisplayKey: PropTypes.string,
    isDisabled: PropTypes.bool,
    searchPlaceholder: PropTypes.string,
    isSearchLoading: PropTypes.bool,
    messageIfNoSearchResults: PropTypes.string,
  };

  static defaultProps = {
    isDisabled: false,
    placement: 'auto',
  };

  state = {
    isOpen: false,
  };

  componentDidUpdate = (prevProps, prevState) => {
    const wasSuggestionsOpened = !prevState.isOpen && this.state.isOpen;

    if (wasSuggestionsOpened) {
      setTimeout(() => {
        if (this.searchInputInstance) this.searchInputInstance.focus();
      }, 100);
    }
  }

  render() {
    return (
      <div className={getClassnames('blng-searchable-select', this.props.className)}>
        <div
          className={getClassnames('blng-searchable-select__toggle', {
            'blng-searchable-select__toggle--disabled': this.props.isDisabled,
          })}
        >
          <div
            className="blng-searchable-select__toggle-content"
            onClick={() => {
              if (!this.props.isDisabled) {
                this.setState({ isOpen: true });
              }
            }}
          >
            {this.props.renderSelectedItem()}
          </div>

          <Popover
            className="blng-searchable-select__popover"
            placement={'bottom-end'}
          >
            <Popover.TARGET
              className={getClassnames('blng-searchable-select__toggle-icon-wrap', {
                'blng-searchable-select__toggle-icon-wrap--open': this.state.isOpen,
              })}
            >
              <div
                className={getClassnames('blng-searchable-select__toggle-icon', {
                  'blng-searchable-select__toggle-icon--open': this.state.isOpen,
                  'blng-searchable-select__toggle-icon--disabled': this.props.isDisabled,
                })}
                onClick={() => {
                  if (!this.props.isDisabled) {
                    this.setState({ isOpen: true });
                  }
                }}
              >
                <i className="fa fa-chevron-down"></i>
              </div>
            </Popover.TARGET>
            <Popover.OVERLAY
              isOpen={this.state.isOpen}
              onClick={() => {
                this.setState({
                  isOpen: false,
                });
              }}
            />
            <Popover.CONTENT
              isOpen={this.state.isOpen}
              className="blng-searchable-select__content"
            >
              <Popover.ARROW />
              <div className="blng-searchable-select__suggestions-container">
                {
                  this.props.helpText ? (
                    <div className="blng-searchable-select__suggestions-help">
                      {this.props.helpText}
                    </div>
                  ) : null
                }
                <div className="blng-searchable-select__suggestions-wrap">
                  <Suggestions
                    suggestions={this.props.suggestions}
                    onSuggestionSelect={
                      (suggestion) => {
                        this.setState({ isOpen: false });
                        this.props.onChange(suggestion);
                      }
                    }
                  >
                    <Suggestions.INPUT
                      value={this.props.searchValue}
                      placeholder={this.props.searchPlaceholder || ''}
                      onChange={(newValue) => {
                        this.props.onSearchChange(newValue);
                      }}
                      ref={(ref) => {
                        this.searchInputInstance = ref;
                      }}
                    />
                    <Suggestions.CONTAINER
                      className="blng-searchable-select__suggestions"
                      isLoading={this.props.isSearchLoading}
                      messageIfEmpty={this.props.messageIfNoSearchResults}
                      suggestionClassname="blng-searchable-select__suggestion"
                      onSuggestionClick={
                        (suggestion) => {
                          this.setState({ isOpen: false });
                          this.props.onChange(suggestion);
                        }
                      }
                    />
                  </Suggestions>
                </div>
              </div>
            </Popover.CONTENT>
          </Popover>
        </div>
      </div>
    );
  }
}
