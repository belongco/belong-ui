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
  filteredSuggestions: suggestions,
};

<div>
  <div>Without Expanded</div>
  <br /><br />
  <TagsInput
    searchValue={state.searchValue}
    onAddTag={(newTag, meta) => {
      if (meta.isSuggestion) {
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
        const filteredSuggestions = suggestions.filter(suggestion => (
          suggestion['name'].indexOf(value) !== -1 || !value
        ));

        setState({ isLoading: false, filteredSuggestions });
      }, 1200);
    }}
    OnRemoveTag={(item, index, meta) => {
      setState({
        selectedItem: state.selectedItem.filter((item, i) => i !== index),
      });
    }}
    suggestions={state.filteredSuggestions}
    tags={state.selectedItem}
    renderTag={tag => tag}
    isEditableTag={(tag) => { return !_.get(tag, 'readOnly', false); }}
    renderSuggestion={(suggestion) => (<span>{suggestion.name}</span>)}
    searchPlaceholder="To"
    messageIfNoSearchResults="No Search Result"
  />
  <br /><br />
  <div>With Expandad</div>
  <br /><br />
  <TagsInput
    isExpanded
    searchValue={state.searchValue}
    onAddTag={(newTag, meta) => {
      if (meta.isSuggestion) {
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
        const filteredSuggestions = suggestions.filter(suggestion => (
          suggestion['name'].indexOf(value) !== -1 || !value
        ));

        setState({ isLoading: false, filteredSuggestions });
      }, 1200);
    }}
    OnRemoveTag={(item, index, meta) => {
      setState({
        selectedItem: state.selectedItem.filter((item, i) => i !== index),
      });
    }}
    suggestions={state.filteredSuggestions}
    tags={state.selectedItem}
    renderTag={tag => tag}
    renderSuggestion={(suggestion) => (<span>{suggestion.name}</span>)}
    searchPlaceholder="To"
    messageIfNoSearchResults="No Search Result"
  />
</div>
```