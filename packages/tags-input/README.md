#### Examples:

TagsInput is a set of components that can be used to build autosuggestion with tags components.

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
  onAddTag={(newTag) => {
    if (newTag.name) {
      setState(prevState => ({
        selectedItem: [...prevState.selectedItem, newTag.name],
        searchValue: '',
      }));
    } else {
      setState(prevState => ({
        selectedItem: [...prevState.selectedItem, newTag],
        searchValue: '',
      }));
    }
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
  OnRemoveTag={(item, index, meta) => {
    setState({
      selectedItem: state.selectedItem.filter((item, i) => i !== index),
    });
  }}
  suggestions={state.filteredSuggstions}
  selectedItem={state.selectedItem}
  renderSuggestion={(suggestion) => (<span>{suggestion.name}</span>)}
  searchPlaceholder="To"
  messageIfNoSearchResults="No Search Found"
/>
</div>
```