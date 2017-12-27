#### Basic Checkbox Usage:

The Label for the checkbox is to be added by the Parent.

```js
initialState = { isChecked: false };

<Checkbox
  isChecked={state.isChecked}
  onClick={() => { setState({ isChecked: !state.isChecked }) }}
/>
```
