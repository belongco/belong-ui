  #### Tag Usage:

```js
const suggestions = [
  { id: 1, title: 'first'},
  { id: 2, title: 'second'},
  { id: 3, title: 'third'},
];

initialState = {
  selectedTab: 1,
};

<div className="styleguidist__input-wrap">
  <div>Horizontal Tabs</div>
  <br />
  <Tabbed
    tabs={suggestions}
    selectedTab={state.selectedTab}
    onClick={(event) => {
      setState({
        selectedTab: event.id,
      });
    }}
  />
  <div style={{ width: 'fit-content', margin: '30px auto' }}>
    {state.selectedTab === 1 ? (
      <div>First</div>
    ) : state.selectedTab === 2 ? (
      <div>Second</div>
    ) : state.selectedTab === 3 ? (
      <div>Third</div>
    ) : null}
  </div>
  <br />
  <div>Vertical tags</div>
  <br />
  <div style={{ display: 'flex' }}>
    <Tabbed
      isVertical
      tabs={suggestions}
      selectedTab={state.selectedTab}
      onClick={(event) => {
        setState({
          selectedTab: event.id,
        });
      }}
    />
    <div style={{ width: 'fit-content', margin: '30px auto' }}>
      {state.selectedTab === 1 ? (
        <div>First</div>
      ) : state.selectedTab === 2 ? (
        <div>Second</div>
      ) : state.selectedTab === 3 ? (
        <div>Third</div>
      ) : null}
    </div>
  </div>
</div>
```