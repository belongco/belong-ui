module.exports = {
  sections: [
    {
      name: 'Belong Hire - Style Guide (WIP)',
      content: './README.md',
    },
    {
      name: 'UI Components',
      components: () => ([
        '../packages/button/src/index.js',
        '../packages/input/src/index.js',
        '../packages/popover/src/index.js',
        '../packages/loader/src/index.js',
      ]),
    },
  ],
  template: './template.html',
  webpackConfig: require('./webpack.styleguide.js'),
};
