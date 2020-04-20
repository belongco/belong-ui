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
    icon={<i className="fa fa-plus" />}
    onHover={(e) => { alert('Hover on Actionable tag'); }}
    onClick={(e) => { alert('Click on Actionable tag'); }}
  >
    <span>4 More</span>
  </Tag>
  <br /><br />
  <div>Actionable tag - With Icon—Right </div>
  <br />
  <Tag
    icon={<i className="fa fa-angle-double-down" />}
    iconPlacement="right"
    onHover={(e) => { alert('Hover on Actionable tag'); }}
    onClick={(e) => { alert('Click on Actionable tag'); }}
  >
    <span>Bangalore</span>
  </Tag>
  <br /><br />
  <div>Removable tag </div>
  <br />
  <Tag
    variant="removable"
    icon={<i className="fa fa-times" />}
    iconPlacement="right"
  >
    <span>Bangalore</span>
  </Tag>
</div>
```