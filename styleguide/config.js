module.exports = {
  sections: [
    {
      name: 'Belong Hire - Style Guide (WIP)',
      content: './README.md',
    },
    {
      name: 'Core UI Components',
      components: () => ([
        '../packages/button/src/index.js',
        '../packages/revamped-button/src/index.js',
        '../packages/input/src/index.js',
        '../packages/popover/src/index.js',
        '../packages/loader/src/index.js',
        '../packages/checkbox/src/index.js',
        '../packages/radio-box/src/index.js',
        '../packages/suggestions/src/index.js',
        '../packages/pagination/src/index.js',
        '../packages/toggle/src/index.js',
        '../packages/tags-input/src/index.js',
        '../packages/tabbed/src/index.js',
        '../packages/tag/src/index.js',
        '../packages/pill/src/index.js',
        '../packages/modal/src/index.js',
        '../packages/card/src/index.js',
      ]),
    },
    {
      name: 'Select/Dropdown UI Components',
      components: () => ([
        '../packages/select-dropdown/src/index.js',
        '../packages/searchable-select/src/index.js',
      ]),
    },
  ],
  template: './template.html',
  webpackConfig: require('./webpack.styleguide.js'),
};
