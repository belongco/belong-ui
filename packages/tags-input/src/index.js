// vendor modules
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
// react modules
import Popover from '@belong-ui/popover';
import Suggestions from '@belong-ui/suggestions';
// utility modules
import { keyCodes } from '../../common/constants';

import './index.scss';

/**
 * @example ../README.md
 */
export default class TagsInput extends React.Component {
  static propTypes = {
    isOpen: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isExpanded: PropTypes.bool,
    className: PropTypes.string,
    onDropdownClose: PropTypes.func,
    tags: PropTypes.array,
    renderTag: PropTypes.func,
    searchValue: PropTypes.string,
    searchPlaceholder: PropTypes.string,
    onSearchChange: PropTypes.func,
    isSearchLoading: PropTypes.bool,
    messageIfNoSearchResults: PropTypes.string,
    renderSuggestion: PropTypes.func,
    onAddTag: PropTypes.func,
    OnRemoveTag: PropTypes.func,
    suggestions: PropTypes.object,
    isEditableTag: PropTypes.func,
  };
  static defaultProps = {
    isOpen: false,
    isExpanded: false,
    renderTag: () => ('render tag'),
    isEditableTag: () => (true),
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

  triggerFocusSuggestionsInput = () => {
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
              (suggestion, meta) => {
                this.props.onAddTag(suggestion, meta);
                this.setState({ isOpen: false });
              }
            }
          >
            <Popover.TARGET>
              <div
                className="blng-tags-input__items"
                onClick={() => { this.triggerFocusSuggestionsInput(); }}
              >
                {!this.props.isExpanded && (
                  <React.Fragment>
                    {_.map(this.props.tags, (item, index) => (
                      <React.Fragment>
                        {!_.isEmpty(item) ? (
                          <span
                            className="blng-tags-input__tag"
                            key={index}
                          >
                            {this.props.renderTag(item)}
                            {this.props.isEditableTag(item) && (
                              <i
                                className="fa fa-times blng-tags-input__tag-remove"
                                onClick={() => { this.props.OnRemoveTag(item, index, { isBackspace: false }); }}
                              />
                            )}
                          </span>
                        ) : null}
                      </React.Fragment>
                    ))}
                  </React.Fragment>
                )}
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
                  onKeyDown={(event) => {
                    if (!this.props.isExpanded && _.isEqual(event.keyCode, keyCodes.BACKSPACE) && _.isEmpty(this.props.searchValue)) {
                      const index = this.props.tags.length - 1;

                      this.props.OnRemoveTag(this.props.tags[index], index, { isBackspace: true });
                    }
                  }}
                />
              </div>
            </Popover.TARGET>
            <Popover.CONTENT
              isOpen={this.state.isOpen}
            >
              <div className="blng-tags-input__content">
                <Suggestions.CONTAINER
                  className="blng-searchable-select__suggestions"
                  isLoading={this.props.isSearchLoading}
                  messageIfEmpty={this.props.messageIfNoSearchResults}
                  suggestionClassname="blng-searchable-select__suggestion"
                  renderSuggestion={this.props.renderSuggestion}
                  onSuggestionClick={
                    (suggestion, meta) => {
                      this.setState({ isOpen: false });
                      this.props.onAddTag(suggestion, { ...meta, isSuggestion: true });
                      this.triggerFocusSuggestionsInput();
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
        {this.props.isExpanded && (
          <div className="blng-tags-input__container">
            {_.map(this.props.tags, (item, index) => (
              <React.Fragment>
                {!_.isEmpty(item) ? (
                  <span
                    className="blng-tags-input__tag"
                    key={index}
                  >
                    {this.props.renderTag(item)}
                    {this.props.isEditableTag(item) && (
                      <i
                        className="fa fa-times blng-tags-input__tag-remove"
                        onClick={() => { this.props.OnRemoveTag(item, index, { isBackspace: false }); }}
                      />
                    )}
                  </span>
                ) : null}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    );
  }
}
