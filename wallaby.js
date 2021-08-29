module.exports = function (wallaby) {
  return {
    autoDetect: true,
    files: ['src/**/*.ts'],
    tests: ['test/**/*.test.ts'],
    compilers: {
      '**/*.ts?(x)': w.compilers.typeScript({
        typescript: require('typescript'),
        module: 'commonjs',
        jsx: 'React',
      }),
    },
    testFramework: {
      configFile: './jest.config.wallaby.js',
    },
  };
};
