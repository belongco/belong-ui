#### Examples:

Use this component for

1. Placing a dropdown (For Navigation or Preferences Selection)
2. Selecting a single value from options in form input.

```js
initialState = {
  selectedItem: null,
  selectedFruits: [],
};

const suggestions = ['apple', 'orange', 'banana'];

<div>
<SelectDropdown
  onSelect={(newValue) => {
    setState({ selectedItem: newValue });
  }}
  items={suggestions}
  renderSelectedItem={() => (
    state.selectedItem ? state.selectedItem : (<span>Select Fruit</span>)
  )}
/>
<br />
<br /><br />
<p>Disabled Dropdown</p>
<br />
<SelectDropdown
  isDisabled
  onSelect={(newValue) => {
    setState({ selectedItem: newValue });
  }}
  items={suggestions}
  renderSelectedItem={() => (
    state.selectedItem ? state.selectedItem : (<span>Disabled Select Dropdown</span>)
  )}
/>

<br />
<br /><br />
<p>Custom Rendering</p>
<br />
<SelectDropdown
  onSelect={(newValue) => {
    if (state.selectedFruits.indexOf(newValue) !== -1) {
      setState({ selectedFruits: state.selectedFruits.filter((fruit) => (fruit !== newValue)) })
    } else {
      setState({ selectedFruits: [...state.selectedFruits, newValue] });
    }
  }}
  items={suggestions}
  renderSelectedItem={() => (
    state.selectedFruits.length ? `${state.selectedFruits.length} fruits selected` : (<span>Select Fruits</span>)
  )}
  renderItem={(item, index) => (
    <span>
      {state.selectedFruits.indexOf(item) !== -1 ? <i className="fa fa-check-circle" /> : <i className="fa fa-circle" />} {item}
    </span>
  )}
/>

<br />
<br /><br />
<p>Usage as input (e.g. for forms)</p>
<br />
<SelectDropdown
  className="styleguidist__dropdown"
  isInput
  onSelect={(newValue) => {
    setState({ selectedItem: newValue });
  }}
  items={suggestions}
  renderSelectedItem={() => (
    state.selectedItem ? state.selectedItem : (<span>Select Fruit</span>)
  )}
/>

<br />
<br /><br />
<p>Usage as input (Disabled)</p>
<br />
<SelectDropdown
  className="styleguidist__dropdown"
  isInput
  isDisabled
  onSelect={(newValue) => {
    setState({ selectedItem: newValue });
  }}
  items={suggestions}
  renderSelectedItem={() => (
    state.selectedItem ? state.selectedItem : (<span>Select Fruit</span>)
  )}
/>
</div>
```
