const config = {
  core: {
    // More on Webpack configuration: https://storybook.js.org/docs/react/builders/webpack#webpack-5
    builder: 'webpack5',
  },
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  staticDirs: ['../public'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],
  framework: '@storybook/react',
  // More on TypeScript support: https://storybook.js.org/docs/react/configure/typescript
  // Important: Stories must be written with ".tsx" extension to enable type checking!
  typescript: {
    check: true,
  },
};

module.exports = config;
