#### Basic Input Usage:


```js
initialState = {
  value: '',
  smallValue: '',
  textAreaValue: '',
};
<div className="styleguidist__input-wrap">
  <Input
    placeholder="Placeholder"
    value={state.value}
    onChange={(value) => { setState({ value }); }}
    onEnter={(value) => { alert(`value: ${value}`); }}
  />
  <br/>
  <br/>

  <Input
    placeholder="Small Input"
    size="small"
    value={state.smallValue}
    onChange={(smallValue) => { setState({ smallValue }); }}
    onEnter={(smallValue) => { alert(`Value: ${smallValue}`); }}
  />
  <br/>
  <br/>

  <Input
    isTextarea
    placeholder="TextArea Placeholder"
    value={state.textAreaValue}
    onChange={(textAreaValue) => { setState({ textAreaValue }); }}
    onEnter={(textAreaValue) => { alert(`value: ${textAreaValue}`); }}
    htmlAttributes={{
      rows: '2',
      cols: '30',
    }}
  />
</div>
```

Disabled Inputs
```js
initialState = {
  value: '',
};
<div className="styleguidist__input-wrap">
  <Input
    placeholder="Placeholder"
    isDisabled
    value={"Disabled Value"}
  />
  <br /><br />
  <Input
    isTextarea
    placeholder="Placeholder"
    isDisabled
    value={"Disabled TextArea Value"}
  />
</div>
```

Uncontrolled Mode
```js
initialState = {
  value: '',
};
<div className="styleguidist__input-wrap">
  <Input
    placeholder="Uncontrolled Input"
    onEnter={(value) => { alert(`value: ${value}`); }}
  />
</div>
```
