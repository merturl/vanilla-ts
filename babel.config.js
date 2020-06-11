module.exports = (api) => {
  return {
    plugins: [
      [
        '@babel/plugin-transform-runtime',
        { absoluteRuntime: false, corejs: 3, helpers: true, regenerator: true, useESModules: false },
      ],
    ],
    presets: [
      [
        '@babel/preset-env',
        {
          useBuiltIns: 'usage',
          // caller.target will be the same as the target option from webpack
          targets: api.caller((caller) => caller && caller.target === 'node')
            ? { node: 'current' }
            : { chrome: '58', ie: '11' },
        },
      ],
      '@babel/preset-typescript',
    ],
  };
};
