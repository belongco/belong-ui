#### Pagination Usage:

```js
const [PAGE_RANGE_DISPLAYED, PAGE_SIZE, totalResults] = [5, 15, 1000];

initialState = {
  activePage: 1,
};

<Pagination
  pageRangeDisplayed={PAGE_RANGE_DISPLAYED}
  activePage={state.activePage}
  itemsCountPerPage={PAGE_SIZE}
  totalItemsCount={totalResults}
  renderPrevPage={() => (<i class="fa fa-chevron-left"></i>)}
  renderNextPage={() => (<i class="fa fa-chevron-right"></i>)}
  onChange={(pageNumber) => {
    setState({ activePage: pageNumber });
  }}
/>
```
