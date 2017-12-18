#### Basic Popover Usage:

The Popover is a core UI component used to build UI elements like Dropdowns, SelectBoxes, Tooltip etc. It uses compound components and Popper.js library under the Hood.

In this example we have built a simple Select Dropdown.

```js
const PopoverTarget = Popover.TARGET;

const PopoverContent = Popover.CONTENT;

const PopoverArrow = Popover.ARROW;

const PopoverOverlay = Popover.OVERLAY;

initialState = {
  isDropdownOpen: false,
  selectedItem: null,
};
const suggestions = ['apple', 'orange', 'banana'];

<div className="styleguidist__popover-wrap">
  <Popover
    className="styleguidist__popover"
    placement="bottom-end"
  >
    <div className="styleguidist__popover-text" onClick={() => { setState({ isDropdownOpen: true }) }}>
      {state.selectedItem ? state.selectedItem : 'Select Fruit'}
    </div>
    <PopoverTarget>
      <div className="styleguidist__popover-dropdown-icon" onClick={() => { setState({ isDropdownOpen: true }) }}>
        {state.isDropdownOpen ? <i className="fa fa-chevron-up"></i> : <i className="fa fa-chevron-down"></i>}
      </div>
    </PopoverTarget>
    <PopoverContent
      isOpen={state.isDropdownOpen}
    >
      <PopoverArrow />
      <div className="styleguidist__popover-dropdown">
        {
          suggestions.map((suggestion) => (
            <p
              className="styleguidist__popover-dropdown-item"
              onClick={() => { setState({ selectedItem: suggestion }); }}
            >
              {suggestion}
            </p>
          ))
        }
      </div>
    </PopoverContent>
    <PopoverOverlay
      isOpen={state.isDropdownOpen}
      onClick={() => { setState({ isDropdownOpen: false }); }}
    />
  </Popover>
</div>
```

Without Arrow. (Can be used with Input Elements).

```js
const PopoverTarget = Popover.TARGET;
const PopoverContent = Popover.CONTENT;
const PopoverOverlay = Popover.OVERLAY;

initialState = {
  isDropdownOpen: false,
  selectedItem: null,
};
const suggestions = ['apple', 'orange', 'banana'];

<div className="styleguidist__popover-wrap">
  <Popover
    className="styleguidist__popover styleguidist__popover--input"
    placement="bottom-start"
  >
    <PopoverTarget>
      <div className="styleguidist__popover-input-wrap" onClick={() => { setState({ isDropdownOpen: true }) }}>
        <div className="styleguidist__popover-text styleguidist__popover-text--input">
          {state.selectedItem ? state.selectedItem : 'Edit Fruit'}
        </div>
        <div className="styleguidist__popover-dropdown-icon">
          <i className="fa fa-pencil"></i>
        </div>
      </div>
    </PopoverTarget>
    <PopoverContent
      isOpen={state.isDropdownOpen}
    >
      <div className="styleguidist__popover-dropdown">
        {
          suggestions.map((suggestion) => (
            <p
              className="styleguidist__popover-dropdown-item"
              onClick={() => { setState({ selectedItem: suggestion }); }}
            >
              {suggestion}
            </p>
          ))
        }
      </div>
    </PopoverContent>
    <PopoverOverlay
      isOpen={state.isDropdownOpen}
      onClick={() => { setState({ isDropdownOpen: false }); }}
    />
  </Popover>
</div>
```
