### Suggestions Example


```js
initialState = {
  value: '',
};
const suggestions = ['apple', 'orange', 'banana', 'mango', 'badam', 'grapes', 'pineapple', 'guava', 'pear'];


<div className="styleguidist__suggestions">
  <Suggestions
    suggestions={suggestions.filter(suggestion => (
      suggestion.indexOf(state.value) !== -1 || !state.value
    ))}
    onSuggestionSelect={(value) => { window.alert(value); }}
  >
    <p>Suggestions Input</p>
    <br />
    <Suggestions.INPUT
      placeholder="Search A Fruit"
      value={state.value}
      onChange={(value) => setState({ value })}
    />
    <br />
    <br />
    <p>Suggestions Wrap</p>
    <br />
    <div>
      <Suggestions.CONTAINER
        className="styleguidist__suggestions-wrap"
        suggestionClassname="styleguidist__suggestion"
        onSuggestionClick={suggestion => { window.alert(suggestion); }}
      />
    </div>
  </Suggestions>
</div>
```
