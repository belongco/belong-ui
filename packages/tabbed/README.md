  #### Tag Usage:

```js
const headers = ['First', 'Second', 'Third'];
const panes = [
  <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make</div>,
  <div>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going.</div>,
  <div>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</div>,
];

initialState = {
  activeTabIndex: 1,
};

<div className="styleguidist__input-wrap">
  <div>Active Position passing from props</div>
  <br /><br />
  <Tabbed
    headers={headers}
    panes={panes}
    activeTabIndex={state.activeTabIndex}
    onActiveTabChange={(event) => {
      setState({ activeTabIndex: event });
    }}
  />
  <br /><br />
  <div>Active Position not passing from props</div>
  <br /><br />
  <Tabbed
    headers={headers}
    panes={panes}
  />
</div>
```