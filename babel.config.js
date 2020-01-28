/* eslint-disable func-names */

module.exports = function (api) {
  api.cache(true);

  const presets = [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-react',
  ];

  const plugins = [
    'add-module-exports',
  ];

  return {
    presets,
    plugins,
  };
};
