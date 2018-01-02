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
        '../packages/input/src/index.js',
        '../packages/popover/src/index.js',
        '../packages/loader/src/index.js',
        '../packages/checkbox/src/index.js',
        '../packages/suggestions/src/index.js',
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
