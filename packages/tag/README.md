#### Tag Usage:

```js
initialState = {
  isDropdownOpen: false,
};
<div className="styleguidist__input-wrap">
  <div>Without Clickable</div>
  <br />
  <div style={{ display: 'flex', justifyContent: 'space-around' }}>
    <Tag>
      <span>Bangalore</span>
    </Tag>
    <Tag
      isHoverable
    >
      <span>Bangalore</span>
    </Tag>
  </div>
  <br /><br />
  <div>With Clickable</div>
  <br />
  <div style={{ display: 'flex', justifyContent: 'space-around' }}>
    <Tag
      isClickable
      onClick={(e) => { setState({ isDropdownOpen: !state.isDropdownOpen }) }}
    >
      <span>Bangalore</span>
      {state.isDropdownOpen ? <i className="fa fa-chevron-up" /> : <i className="fa fa-chevron-down" />}
    </Tag>
    <Tag
      isClickable
      isHoverable
      onClick={(e) => { setState({ isDropdownOpen: !state.isDropdownOpen }) }}
    >
      <span>Bangalore</span>
      {state.isDropdownOpen ? <i className="fa fa-chevron-up" /> : <i className="fa fa-chevron-down" />}
    </Tag>
  </div>
</div>
```