#### Tag Usage:

```js
<div className="styleguidist__input-wrap">
  <div>Variant - Raised</div>
  <br />
  <Pill>
    <span>Bangalore</span>
  </Pill>
  <br /><br />
  <div>Variant - Outlined</div>
  <br />
  <Pill
    variant="outlined"
  >
    <span>Bangalore</span>
  </Pill>
  <br /><br />
  <div>With - Icon</div>
  <br />
  <Pill
    isClickable
    onClick={() => { alert('Pills clicked'); }}
  >
    <i className="fa fa-file" />
    <span>Bangalore</span>
  </Pill>
</div>
```