#### Basic Toggle Usage:


```js
initialState = { isChecked: false };

<Toggle
  isChecked={state.isChecked}
  onClick={() => { setState({ isChecked: !state.isChecked }) }}
/>
```
