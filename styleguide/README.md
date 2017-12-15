We created this styleguide to act as a central location where we house a live inventory of  React UI components. Anyone working on the **Belong Hire** product is encouraged to stay familiar with this styleguide and help ensure that it is kept up-to-date.

*Usage:*
Currently the library ishosted on NPM as https://www.npmjs.com/org/belong-ui

To install a component run
```shell noeditor
yarn install @belong-ui/<package name>
```
Note: Used with [reset.css](https://meyerweb.com/eric/tools/css/reset/)

Please import CSS styles via
```scss noeditor
@import '/path__to__node_modules/@belong-ui/<package name>/dist/index.min.css';
```

To use any component,
```js static
import ComponentName from '@belong-ui/<package name>';
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
