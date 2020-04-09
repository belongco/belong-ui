#### Tag Usage:

```js
initialState = {
  isDropdownOpen: false,
};
<div className="styleguidist__input-wrap">
  <div>Without Clickable</div>
  <br />
  <Tag>
    <span>Bangalore</span>
  </Tag>
  <br /><br />
  <div>With Clickable</div>
  <br />
  <Tag
    isClickable
    onClick={(e) => { setState({ isDropdownOpen: !state.isDropdownOpen }) }}
  >
    <span>Bangalore</span>
    {state.isDropdownOpen ? <i className="fa fa-chevron-up" /> : <i className="fa fa-chevron-down" />}
  </Tag>
</div>
```