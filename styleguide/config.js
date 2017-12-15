module.exports = {
  sections: [
    {
      name: 'Belong Hire - Style Guide (WIP)',
      content: './README.md',
    },
    {
      name: 'UI Components',
      components: () => ([
        './index.scss',
        '../packages/button/src/index.js',
      ]),
    },
  ],
  template: './template.html',
  webpackConfig: require('./webpack.styleguide.js'),
};
