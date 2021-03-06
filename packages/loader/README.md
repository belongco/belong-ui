#### Basic Loader Usage:

This Loader can be used for Loading States between AJAX calls or even inside some small components such as tags.

```jsx
<div>
  <p>Continous Loaders are best for simple Loading usecases</p>
  <Loader
    isContinous
  />
  <br />
  <br />
  <p>When <b>isContinous = false</b> the loader waits for every <b>stepInterval</b> Seconds before animating again</p>
  <br />
  <Loader
    stepInterval={2500}
    isContinous={false}
  />
  <br />
  <br />
  <p>To Change Size, use the size property</p>
  <br />
  <Loader
    size="small"
    isContinous
  />
  <span>   </span>
  <Loader
    size="medium"
    isContinous
  />
  <span>   </span>
  <Loader
    size="large"
    isContinous
  />
  <span>   </span>
  <Loader
    size="x-large"
    isContinous
  />
  <br />
  <br />
</div>
```
