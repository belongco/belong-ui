#### Basic Button Usage:

```js
<div className="styleguidist__btns-wrap">
  <Button
    onClick={() => { window.alert('Button Was Clicked'); }}
  >
    <span>Simple Button</span>
  </Button>
  <Button
    isDisabled
    onClick={() => { window.alert('Nothing happens on Click'); }}
  >
    <span>Disabled Button</span>
  </Button>
  <Button
    size="small"
    onClick={() => { window.alert('Button Was Clicked'); }}
  >
    <span>Small Button</span>
  </Button>

  <br />
  <br />

  <Button
    type="brand"
    onClick={() => { window.alert('Button Was Clicked'); }}
  >
    <span>Brand Button</span>
  </Button>
  <Button
    type="brand"
    isDisabled
    onClick={() => { window.alert('Button Was Clicked'); }}
  >
    <span>Brand Button</span>
  </Button>
  <Button
    type="primary"
    onClick={() => { window.alert('Button Was Clicked'); }}
  >
    <span>Primary Button</span>
  </Button>
  <Button
    isDisabled
    type="primary"
    onClick={() => { window.alert('Button Was Clicked'); }}
  >
    <span>Primary Button</span>
  </Button>
  <Button
    type="warning"
    onClick={() => { window.alert('Button Was Clicked'); }}
  >
    <span>Warning Button</span>
  </Button>
  <Button
    type="warning"
    isDisabled
    onClick={() => { window.alert('Button Was Clicked'); }}
  >
    <span>Warning Button</span>
  </Button>
  <Button
    type="green"
    onClick={() => { window.alert('Button Was Clicked'); }}
  >
    <span>Green Button</span>
  </Button>
  <Button
    type="green"
    isDisabled
    onClick={() => { window.alert('Button Was Clicked'); }}
  >
    <span>Green Button</span>
  </Button>
  <br />
  <br />
  <Button
    onClick={() => { window.alert('Button Was Clicked'); }}
  >
    <span><i className="fa fa-user"></i> Icon Button</span>
  </Button>
  <Button
    isDisabled
    onClick={() => { window.alert('Button Was Clicked'); }}
  >
    <span><i className="fa fa-spin fa-spinner"></i> Loading</span>
  </Button>
  <Button
    isDisabled
    onClick={() => { window.alert('Button Was Clicked'); }}
  >
    <span><i className="fa fa-spin fa-refresh"></i> Syncing</span>
  </Button>
  <br />
  <br />
  <Button
    type="primary"
    onClick={() => { window.alert('Button Was Clicked'); }}
  >
    <span><i className="fa fa-user"></i> Icon Button</span>
  </Button>
  <Button
    isDisabled
    type="primary"
    onClick={() => { window.alert('Button Was Clicked'); }}
  >
    <span><i className="fa fa-spin fa-spinner"></i> Loading</span>
  </Button>
  <Button
    isDisabled
    type="primary"
    onClick={() => { window.alert('Button Was Clicked'); }}
  >
    <span><i className="fa fa-spin fa-refresh"></i> Syncing</span>
  </Button>
</div>
```
