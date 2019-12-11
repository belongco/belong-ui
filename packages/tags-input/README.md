#### Examples:

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
  selectedItem: [],
  isLoading: false,
  filteredSuggstions: suggestions,
};

<div>
<TagsInput
  searchValue={state.searchValue}
  onChange={(newValue) => {
    setState((prevState) => {
      selectedItem = state.selectedItem.push(newValue.name);
      searchValue = '';
    });
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
  OnTagRemove={(index) => {
    setState({
      selectedItem: state.selectedItem.filter((item, i) => i !== index),
    });
  }}
  suggestions={state.filteredSuggstions}
  selectedItem={state.selectedItem}
  suggestionsDisplayKey="name"
  searchPlaceholder="To"
  helpText="Search and Select a Fruit"
/>
</div>
```
