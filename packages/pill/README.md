#### Tag Usage:

```js
<div className="styleguidist__input-wrap">
  <div>Read Only -Data update  (Activity Status )</div>
  <br />
  <Pill
    variant="default"
  >
    <span>Updated on 30 Dec 19 by Shreyas</span>
  </Pill>
  <br /><br />
  <div>Read Only - Success State</div>
  <br />
  <Pill
    variant="success"
    icon={<i className="fa fa-file" />}
  >
    <span>Consent given</span>
  </Pill>
  <br /><br />
  <div>Read Only - Warning State</div>
  <br />
  <Pill
    variant="warning"
    icon={<i className="fa fa-file" />}
  >
    <span>Consent pending</span>
  </Pill>
  <br /><br />
  <div>Read Only - Critical State</div>
  <br />
  <Pill
    variant="critical"
    icon={<i className="fa fa-file" />}
  >
    <span>Consent not given</span>
  </Pill>
  <br /><br />
  <div>Inactive Pill</div>
  <br />
  <Pill
    variant="tab"
    onClick={(e) => { alert('click on Inactive pill'); }}
  >
    <span>Permanent</span>
  </Pill>
  <br /><br />
  <div>Active Pill</div>
  <br />
  <Pill
    variant="tab"
    isActive
    onHover={(e) => { alert('hover on active pill'); }}
  >
    <span>Permanent</span>
  </Pill>
  <br /><br />
  <div>Read Only - Number</div>
  <br />
  <Pill
    variant="counter"
  >
    <span>3</span>
  </Pill>
  <br /><br />
  <div>Inactive Pill - Wizard</div>
  <br />
  <Pill
    variant="step"
    stepIndex="1"
  >
    <span>Offer Letter</span>
  </Pill>
  <br /><br />
  <div>Active Pill - Wizard</div>
  <br />
  <Pill
    variant="step"
    stepIndex="1"
    isActive
  >
    <span>Interview</span>
  </Pill>
</div>
```