#### Tag Usage:

```js
initialState = {
  isDropdownOpen: false,
};
<div className="styleguidist__input-wrap">
  <div>Read Only</div>
  <br />
  <Tag
    variant="default"
  >
    <span>Bangalore</span>
  </Tag>
  <br /><br />
  <div>Read Only/Status/Amber</div>
  <br />
  <Tag
    variant="warning"
  >
    <span>Bangalore</span>
  </Tag>
  <br /><br />
  <div>Actionable tag</div>
  <br />
  <Tag
    icon="fa fa-plus"
    isHoverable
    isClickable
  >
    <span>4 More</span>
  </Tag>
  <br /><br />
  <div>Actionable tag - With Icon—Right </div>
  <br />
  <Tag
    icon="fa fa-angle-double-down"
    iconPlacement="right"
    isHoverable
    isClickable
  >
    <span>Bangalore</span>
  </Tag>
  <br /><br />
  <div>Removable tag </div>
  <br />
  <Tag
    variant="removable"
    icon="fa fa-times"
    iconPlacement="right"
    isIconClickable
    onIconClick={(e) => { alert('click on icon'); }}
  >
    <span>Bangalore</span>
  </Tag>
</div>
```