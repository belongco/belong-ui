### Suggestions Example

Suggestions is a set of components that can be used to build autocompelete/search UI components.

```js
const suggestions = ['apple', 'orange', 'banana', 'mango', 'badam', 'grapes', 'pineapple', 'guava', 'pear'];

initialState = {
  value: '',
  isLoading: false,
  filteredSuggstions: suggestions,
};

<div className="styleguidist__suggestions">
  <Suggestions
    suggestions={state.filteredSuggstions}
    onSuggestionSelect={(value) => { window.alert(value); }}
  >
    <p>Suggestions Input</p>
    <br />
    <Suggestions.INPUT
      placeholder="Search A Fruit"
      value={state.value}
      onChange={(value) => {
        setState({ value, isLoading: true });

        setTimeout(() => {
          const filteredSuggstions = suggestions.filter(suggestion => (
            suggestion.indexOf(value) !== -1 || !value
          ));

          setState({ isLoading: false, filteredSuggstions });
        }, 1200);
      }}
    />
    <br />
    <br />
    <p>Suggestions Wrap</p>
    <br />
    <div>
      <Suggestions.CONTAINER
        className="styleguidist__suggestions-wrap"
        isLoading={state.isLoading}
        messageIfEmpty="No Suggestions"
        suggestionClassname="styleguidist__suggestion"
        onSuggestionClick={suggestion => { window.alert(suggestion); }}
      />
    </div>
  </Suggestions>
</div>
```
