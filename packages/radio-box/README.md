#### Basic Radiobox Usage:

The Label for the Radiobox is to be added by the Parent.

```js
initialState = { isSelected: false };

<RadioBox
  isSelected={state.isSelected}
  onClick={() => { setState({ isSelected: !state.isSelected }) }}
/>
```
