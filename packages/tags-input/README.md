#### Examples:

```js
const suggestions = ['apple', 'orange', 'banana', 'mango', 'badam', 'grapes', 'pineapple', 'guava', 'pear'];

// const suggestions = [
//   { name: 'apple'},
//   { name: 'orange'},
//   { name: 'banana'},
//   { name: 'mango'},
//   { name: 'badam'},
//   { name: 'grapes'},
//   { name: 'pineapple'},
//   { name: 'guava'},
//   { name: 'pear'},
// ];


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
    if (newValue.name) {
      setState(prevState => ({
        selectedItem: [...prevState.selectedItem, newValue.name],
        searchValue: '',
      }));
    } else {
      setState(prevState => ({
        selectedItem: [...prevState.selectedItem, newValue],
        searchValue: '',
      }));
    }
  }}
  isSearchLoading={state.isLoading}
  onSearchChange={(value) => {
    setState({ searchValue: value, isLoading: true });

    setTimeout(() => {
      const filteredSuggstions = suggestions.filter(suggestion => (
        suggestion.indexOf(value) !== -1 || !value
      ));
      // const filteredSuggstions = suggestions.filter(suggestion => (
      //   suggestion['name'].indexOf(value) !== -1 || !value
      // ));

      setState({ isLoading: false, filteredSuggstions });
    }, 1200);
  }}
  OnTagRemove={(index) => {
    setState({
      selectedItem: state.selectedItem.filter((item, i) => i !== index),
    });
  }}
  onBackSpace={() => {
    setState(prevState => ({
      selectedItem: [...prevState.selectedItem, state.selectedItem.pop()],
    }, () => {}));
  }}
  suggestions={state.filteredSuggstions}
  selectedItem={state.selectedItem}
  suggestionsDisplayKey="name"
  searchPlaceholder="To"
  messageIfNoSearchResults="No Search Found"
/>
</div>
```