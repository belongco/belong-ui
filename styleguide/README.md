We created this styleguide to act as a central location where we house a live inventory of  React UI components. Anyone working on the **Belong Hire** product is encouraged to stay familiar with this styleguide and help ensure that it is kept up-to-date.

*Usage:*
Currently the library is built and hosted as a TAR file that can be installed via npm/yarn.

To install run
```shell noeditor
yarn install
```

Please import CSS styles via
```scss noeditor
@import '';
```

To use any component,
```js static
import { Button } from 'belong-ui';
```


Useful Links

**Zepelin**

We use Zepelin to share design specifcations.
[Zepelin](https://app.zeplin.io/project/55f9265c05a5b5e51adaaa0f/dashboard)

**Colors**

Please Import the SCSS/CSS file generated here. If you are using SASS/SCSS please use only variables defined in the file only.
[Colors](https://app.zeplin.io/project/55f9265c05a5b5e51adaaa0f/styleguide)

**Text Styles**

[Whitney](https://www.typography.com/fonts/whitney/overview/) is the primary font used across.

For Fallback We use the following CSS definition, used by Github. ([CSS-Tricks Link](https://css-tricks.com/snippets/css/system-font-stack/))
```scss noeditor
// Fallback
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
 Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

//  Primary
font-family: 'Whitney A', 'Whitney B', 'Whitney-Light';
```

[Text Styles](https://app.zeplin.io/project/55f9265c05a5b5e51adaaa0f/screen/5900a613a158c00e0b36b9dc)

Note: Used with [reset.css](https://meyerweb.com/eric/tools/css/reset/)
