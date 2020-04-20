  #### Tag Usage:

```js
const suggestions = [
  { id: 1, title: 'first'},
  { id: 2, title: 'second'},
  { id: 3, title: 'third'},
];

initialState = {
  activeTabIndex: 1,
};

<div className="styleguidist__input-wrap">
  <div>Horizontal Tabs</div>
  <br />
  <Tabbed
    tabs={suggestions}
    activeTabIndex={state.activeTabIndex}
    onClick={(event) => {
      setState({
        activeTabIndex: event.id,
      });
    }}
  />
  <div style={{ width: 'fit-content', margin: '30px auto' }}>
    {state.activeTabIndex === 1 ? (
      <div>First</div>
    ) : state.activeTabIndex === 2 ? (
      <div>Second</div>
    ) : state.activeTabIndex === 3 ? (
      <div>Third</div>
    ) : null}
  </div>
  <br />
  <div>Vertical tags</div>
  <br />
  <div style={{ display: 'flex' }}>
    <Tabbed
      vertical
      tabs={suggestions}
      activeTabIndex={state.activeTabIndex}
      onClick={(event) => {
        setState({
          activeTabIndex: event.id,
        });
      }}
    />
    <div style={{ width: 'fit-content', margin: '30px auto' }}>
      {state.activeTabIndex === 1 ? (
        <div>First</div>
      ) : state.activeTabIndex === 2 ? (
        <div>Second</div>
      ) : state.activeTabIndex === 3 ? (
        <div>Third</div>
      ) : null}
    </div>
  </div>
</div>
```