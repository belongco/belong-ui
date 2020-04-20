#### Tag Usage:

```js
<div className="styleguidist__input-wrap">
  <div>Variant - Raised</div>
  <br />
  <div style={{ display: 'flex', justifyContent: 'space-around' }}>
    <Pill>
      <span>Bangalore</span>
    </Pill>
    <Pill
      isHoverable
    >
      <span>Bangalore</span>
    </Pill>
  </div>
  <br /><br />
  <div>Variant - Outlined</div>
  <br />
  <div style={{ display: 'flex', justifyContent: 'space-around' }}>
    <Pill
      variant="outlined"
    >
      <span>Bangalore</span>
    </Pill>
    <Pill
      variant="outlined"
      isHoverable
    >
      <span>Bangalore</span>
    </Pill>
  </div>
  <br /><br />
  <div>With - Icon</div>
  <br />
  <div style={{ display: 'flex', justifyContent: 'space-around' }}>
    <Pill
      isClickable
      onClick={() => { alert('Pills clicked'); }}
    >
      <i className="fa fa-file" />
      <span>Bangalore</span>
    </Pill>
  </div>
</div>
```