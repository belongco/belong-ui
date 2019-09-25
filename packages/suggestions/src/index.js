// vendor modules
import React from 'react';
import PropTypes from 'prop-types';
import getClassNames from 'classnames';
import _ from 'lodash';
// react modules
import Input from '@belong-ui/input';
import MiniLoader from '@belong-ui/loader';
// utility modules
import { keyCodes } from '../../common/constants';

import './index.scss';

const SUGGESTIONS_CONTEXT = '__blng-suggestions__';

class SuggestionsInput extends React.Component {
  static displayName = 'SuggestionsInput';
  static propTypes = {
    id: PropTypes.string,
    isDisabled: PropTypes.bool,
    value: PropTypes.string,
    onChange: PropTypes.func,
    onEnter: PropTypes.func,
    onEscape: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    className: PropTypes.string,
    placeholder: PropTypes.string,
  };
  static contextTypes = {
    [SUGGESTIONS_CONTEXT]: PropTypes.object.isRequired,
  };
  blur() {
    if (this.inputInstance) {
      this.inputInstance.blur();
    }
  }
  focus() {
    if (this.inputInstance) {
      this.inputInstance.focus();
    }
  }
  render() {
    const { onKeyDown } = this.context[SUGGESTIONS_CONTEXT];

    return (
      <div className="blng-suggestions__input">
        <Input
          className={getClassNames('blng-suggestions__text-input', this.props.className)}
          ref={(ref) => { this.inputInstance = ref; }}
          placeholder={this.props.placeholder}
          value={this.props.value}
          onChange={this.props.onChange}
          onKeyDown={(event) => {
            onKeyDown(event);
          }}
        />
      </div>
    );
  }
}

class SuggestionsWrap extends React.Component {
  static displayName = 'SuggestionsWrap';
  static propTypes = {
    className: PropTypes.string,
    isLoading: PropTypes.bool,
    suggestionClassname: PropTypes.string,
    suggestionsDisplayKey: PropTypes.string,
    renderSuggestion: PropTypes.func,
    isDisabled: PropTypes.bool,
    onSuggestionClick: PropTypes.func,
    messageIfEmpty: PropTypes.string,
  };
  static defaultProps = {
    isLoading: false,
  };
  static contextTypes = {
    [SUGGESTIONS_CONTEXT]: PropTypes.object.isRequired,
  };
  componentDidMount() {
    this.context[SUGGESTIONS_CONTEXT].onMount(this.suggestionsWrapNode);
  }
  componentWillUnmount() {
    this.context[SUGGESTIONS_CONTEXT].onUnMount();
  }
  render() {
    const suggestionElements = (this.context[SUGGESTIONS_CONTEXT].suggestions || []).map((suggestion, index) => {
      const suggestionValue = _.isString(suggestion) ? suggestion : suggestion[this.props.suggestionsDisplayKey];
      const isSelected = index === this.context[SUGGESTIONS_CONTEXT].selectedIndex;

      return (
        <div
          key={`blng-suggestions__wrap-${index}`}
          className={getClassNames('blng-suggestions__suggestion', this.props.suggestionClassname, {
            'blng-suggestions__suggestion--hover': isSelected,
          })}
          onClick={() => {
            this.props.onSuggestionClick(suggestion, {
              provider: 'suggestions',
            });
          }}
        >
          {this.props.renderSuggestion ? (
            this.props.renderSuggestion(suggestion, isSelected)
          ) : suggestionValue}
        </div>
      );
    });

    return (
      <div
        className={getClassNames('blng-suggestions__suggestions', this.props.className)}
        onMouseEnter={() => { this.context[SUGGESTIONS_CONTEXT].onMouseEnterSuggestions(); }}
        ref={(ref) => { this.suggestionsWrapNode = ref; }}
      >
        {!this.props.isLoading ? suggestionElements : (
          <MiniLoader isContinous className="blng-suggestions__loader" />
        )}
        {
          !_.isEmpty(this.props.messageIfEmpty) && _.isEmpty(suggestionElements) && !this.props.isLoading ? (
            <div className="blng-suggestions__empty-message">
              {this.props.messageIfEmpty}
            </div>
          ) : null
        }
      </div>
    );
  }
}

/**
 * @example ../README.md
 */
export default class Suggestions extends React.Component {
  static displayName = 'Suggestions';
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.element,
    suggestions: PropTypes.array,
    onSuggestionSelect: PropTypes.func,
  };
  static childContextTypes = {
    [SUGGESTIONS_CONTEXT]: PropTypes.object.isRequired,
  };
  static INPUT = SuggestionsInput;
  static CONTAINER = SuggestionsWrap;
  state = {
    selectedIndex: -1,
    suggestions: [],
  };
  getChildContext() {
    return {
      [SUGGESTIONS_CONTEXT]: {
        onKeyDown: (event) => {
          this.onSuggestionsInputKeydown(event);
        },

        selectedIndex: this.state.selectedIndex,
        suggestions: this.props.suggestions,
        onMount: (suggestionsWrapNode) => {
          this.suggestionsWrapNode = suggestionsWrapNode;
        },
        onUnMount: () => {
          this.suggestionsWrapNode = null;
        },
        onMouseEnterSuggestions: () => {
          this.setState({ selectedIndex: -1 });
        },
      },
    };
  }
  componentWillReceiveProps() {
    this.setState({
      selectedIndex: -1,
    });
  }
  componentDidUpdate = (prevProps, prevState) => {
    const wasSelectedIndexChanged = prevState.selectedIndex !== this.state.selectedIndex;

    if (wasSelectedIndexChanged && this.state.selectedIndex !== -1) {
      const wasMovedDown = this.state.selectedIndex > prevState.selectedIndex;
      const { selectedIndex } = this.state;

      const $suggestionNode = $(this.suggestionsWrapNode).find('.blng-suggestions__suggestion').eq(selectedIndex);
      const suggestionNodeHeight = $('.blng-suggestions__suggestion').outerHeight();
      const suggestionsWrapNodeHeight = $(this.suggestionsWrapNode).outerHeight();
      const isScrollRequired = $suggestionNode.length && (
        $suggestionNode.position().top + suggestionNodeHeight > suggestionsWrapNodeHeight ||
        $suggestionNode.position().top < 0
      );

      if (isScrollRequired) {
        const scrollTop = wasMovedDown ? (selectedIndex * suggestionNodeHeight) : (
          selectedIndex * suggestionNodeHeight - (suggestionsWrapNodeHeight - suggestionNodeHeight)
        );

        $(this.suggestionsWrapNode).scrollTop(scrollTop);
      }
    }
  }
  onSuggestionsInputKeydown = (event) => {
    switch (event.keyCode) {
      case keyCodes.ENTER: {
        const isSuggestion = this.state.selectedIndex !== -1;
        const suggestion = isSuggestion ? this.props.suggestions[this.state.selectedIndex] : event.target.value;

        this.props.onSuggestionSelect(suggestion, {
          provider: isSuggestion ? 'suggestions' : 'user',
          isSuggestion,
        });

        break;
      }
      case keyCodes.UP_ARROW: {
        if (_.isEmpty(this.props.suggestions)) {
          return;
        }
        event.preventDefault();
        event.nativeEvent.preventDefault();

        const selectedIndex = this.state.selectedIndex < 1 ? this.props.suggestions.length - 1 : this.state.selectedIndex - 1;

        this.setState({ selectedIndex });
        break;
      }
      case keyCodes.DOWN_ARROW: {
        if (_.isEmpty(this.props.suggestions)) {
          return;
        }

        const selectedIndex = (this.state.selectedIndex === this.props.suggestions.length - 1) ? 0 : this.state.selectedIndex + 1;

        this.setState({ selectedIndex });
        break;
      }
      default:
    }
  }
  render() {
    return (
      <div className={getClassNames('blng-suggestions', this.props.className)}>
        {this.props.children}
      </div>
    );
  }
}
