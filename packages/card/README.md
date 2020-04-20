  #### Tag Usage:

```js
<div className="styleguidist__input-wrap">
  <div>With Hover and Clickable</div>
  <br /><br />
  <Card
    isClickable
    onClick={() => { alert('card click'); }}
    isHoverable
  >
    <div style={{ width: '200px', padding: '10px' }}>
      <div style={{ fontSize: '20px', fontWeight: '500' }}>Card title</div>
      <div style={{ fontSize: '15px', marginTop: '8px' }}>Secondary text</div>
    </div>
  </Card>
  <br />
  <div>Without hover and Without clickable</div>
  <br /><br />
  <Card>
    <div style={{ width: '200px', padding: '10px' }}>
      <div style={{ fontSize: '20px', fontWeight: '500' }}>Card title</div>
      <div style={{ fontSize: '15px', marginTop: '8px' }}>Secondary text</div>
    </div>
  </Card>
</div>
```