#### Toggle Usage:

```js
initialState = {
  isToggle: false,
};

<Toggle 
  isToggle={state.isToggle}
  onClick={() => { setState({ isToggle: !state.isToggle })}}
/>
```