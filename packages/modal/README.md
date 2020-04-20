#### Basic Modal Usage:

```js
initialState = {
  isModalWithCloseButton: false,
  isModalWithoutCloseButton: false,
};

<div className="styleguidist__btns-wrap">
  <p>With Close Button and background dark</p>
  <br /><br />
  <div>
    <Modal
      isOpen={state.isModalWithCloseButton}
      hideCloseIcon
      type="dark"
      title="Modal Title"
      position="center"
      onEscape={(event) => {
        setState({ isModalWithCloseButton: false });
      }}
      onClose={() => {
        setState({ isModalWithCloseButton: false });
      }}
    >
      <div>
        <div style={{ marginTop: '20px' }}>Modal Box</div>
      </div>
    </Modal>
    <button
      type="button"
      className="blng-button"
      onClick={() => {
        setState({ isModalWithCloseButton: !state.isModalWithCloseButton });
      }}
    >
      Modal With Close Option
    </button>
  </div>
  <br /><br />
  <p>Without Close Button and background light</p>
  <br /><br />
  <div>
    <Modal
      isOpen={state.isModalWithoutCloseButton}
      type="light"
      position="center"
      onEscape={(event) => {
        setState({ isModalWithoutCloseButton: false });
      }}
      onClose={() => {
        setState({ isModalWithoutCloseButton: false });
      }}
    >
      <div>
        <div style={{ fontSize: '24px', fontWeight: '500', color: '#555555' }}>Title</div>
        <div style={{ marginTop: '20px' }}>Modal Box</div>
      </div>
    </Modal>
    <button
      type="button"
      className="blng-button"
      onClick={() => {
        setState({ isModalWithoutCloseButton: !state.isModalWithoutCloseButton });
      }}
    >
      Modal Without Close Option
    </button>
  </div>
</div>
```
