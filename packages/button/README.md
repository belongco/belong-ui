#### Basic Button Usage:

```js
<div className="styleguidist__btns-wrap">
  <p>Simple Button</p>
  <br /><br />
  <div style={{ display: 'flex', justifyContent: 'space-around' }}>
    <div>
      <Button
        variant="text"
        onClick={() => { window.alert('Button Was Clicked'); }}
      >
        <span>Simple Text Button</span>
      </Button>
    </div>
    <div>
      <Button
        variant="outlined"
        onClick={() => { window.alert('Button Was Clicked'); }}
      >
        <span>Simple Outlined Button</span>
      </Button>
    </div>
    <div>
      <Button
        variant="raised"
        onClick={() => { window.alert('Button Was Clicked'); }}
      >
        <span>Simple Raised Button</span>
      </Button>
    </div>
  </div>
  <br /><br /><br />
  <p>Disabled Button</p>
  <br /><br />
  <div style={{ display: 'flex', justifyContent: 'space-around' }}>
    <div>
      <Button
        variant="text"
        isDisabled
        onClick={() => { window.alert('Button Was Clicked'); }}
      >
        <span>Simple Text Button</span>
      </Button>
    </div>
    <div>
      <Button
        variant="outlined"
        isDisabled
        onClick={() => { window.alert('Button Was Clicked'); }}
      >
        <span>Simple Outlined Button</span>
      </Button>
    </div>
    <div>
      <Button
        variant="raised"
        isDisabled
        onClick={() => { window.alert('Button Was Clicked'); }}
      >
        <span>Simple Raised Button</span>
      </Button>
    </div>
  </div>
  <br /><br /><br />
  <p>Icon Button</p>
  <br /><br />
  <div style={{ display: 'flex', justifyContent: 'space-around' }}>
    <div>
      <Button
        variant="text"
        onClick={() => { window.alert('Button Was Clicked'); }}
      >
        <span><i className="fa fa-user" /> Simple Text Button</span>
      </Button>
    </div>
    <div>
      <Button
        variant="outlined"
        onClick={() => { window.alert('Button Was Clicked'); }}
      >
        <span><i className="fa fa-user" /> Simple Outlined Button</span>
      </Button>
    </div>
    <div>
      <Button
        variant="raised"
        onClick={() => { window.alert('Button Was Clicked'); }}
      >
        <span><i className="fa fa-user" /> Simple Raised Button</span>
      </Button>
    </div>
  </div>
  <br /><br /><br />
  <p>Disabled Icon Button</p>
  <br /><br />
  <div style={{ display: 'flex', justifyContent: 'space-around' }}>
    <div>
      <Button
        variant="text"
        isDisabled
        onClick={() => { window.alert('Button Was Clicked'); }}
      >
        <span><i className="fa fa-user" /> Simple Text Button</span>
      </Button>
    </div>
    <div>
      <Button
        variant="outlined"
        isDisabled
        onClick={() => { window.alert('Button Was Clicked'); }}
      >
        <span><i className="fa fa-user" /> Simple Outlined Button</span>
      </Button>
    </div>
    <div>
      <Button
        variant="raised"
        isDisabled
        onClick={() => { window.alert('Button Was Clicked'); }}
      >
        <span><i className="fa fa-user" /> Simple Raised Button</span>
      </Button>
    </div>
  </div>
  <br /><br />
  <p>Small Button</p>
  <br /><br />
  <div style={{ display: 'flex', justifyContent: 'space-around' }}>
    <div>
      <Button
        variant="text"
        onClick={() => { window.alert('Button Was Clicked'); }}
        size="small"
      >
        <span>Simple Text Button</span>
      </Button>
    </div>
    <div>
      <Button
        variant="outlined"
        onClick={() => { window.alert('Button Was Clicked'); }}
        size="small"
      >
        <span>Simple Outlined Button</span>
      </Button>
    </div>
    <div>
      <Button
        variant="raised"
        onClick={() => { window.alert('Button Was Clicked'); }}
        size="small"
      >
        <span>Simple Raised Button</span>
      </Button>
    </div>
  </div>
</div>
```
