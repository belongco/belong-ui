#### Examples:
Use this component for inputs where a value has to be selected from a vast array of options.

```js
const suggestions = [
  { name: 'apple'},
  { name: 'orange'},
  { name: 'banana'},
  { name: 'mango'},
  { name: 'badam'},
  { name: 'grapes'},
  { name: 'pineapple'},
  { name: 'guava'},
  { name: 'pear'},
];

initialState = {
  searchValue: '',
  selectedItem: null,
  isLoading: false,
  filteredSuggstions: suggestions,
};

<div>
<SearchableSelect
  searchValue={state.searchValue}
  onChange={(newValue) => {
    setState({ selectedItem: newValue });
  }}
  isSearchLoading={state.isLoading}
  onSearchChange={(value) => {
    setState({ searchValue: value, isLoading: true });

    setTimeout(() => {
      const filteredSuggstions = suggestions.filter(suggestion => (
        suggestion['name'].indexOf(value) !== -1 || !value
      ));

      setState({ isLoading: false, filteredSuggstions });
    }, 1200);
  }}
  suggestions={state.filteredSuggstions}
  renderSelectedItem={() => (
    state.selectedItem ? state.selectedItem['name'] : (<span>Select Fruit</span>)
  )}
  suggestionsDisplayKey="name"
  searchPlaceholder="Search a Fruit"
  helpText="Search and Select a Fruit"
/>
<br /><br />

<SearchableSelect
  isDisabled
  searchValue={state.searchValue}
  onChange={(newValue) => {
    setState({ selectedItem: newValue });
  }}
  onSearchChange={(newValue) => {
    setState({ searchValue: newValue });
  }}
  renderSelectedItem={() => (
    state.selectedItem ? state.selectedItem['name'] : (<span>Disabled Search</span>)
  )}
  searchPlaceholder="Search a Fruit"
  helpText="Search and Select a Fruit"
  suggestions={suggestions}
/>
</div>
```
