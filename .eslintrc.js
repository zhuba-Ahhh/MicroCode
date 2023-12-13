const { TYPESCRIPT_FILES } = require('prefer-code-style/constants');

module.exports = {
  extends: [
    require.resolve('prefer-code-style/eslint/node'),
    require.resolve('prefer-code-style/eslint/browser'),
    require.resolve('prefer-code-style/eslint/typescript')
  ],
  rules: {
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-explicit-any': ['off']
  },
  overrides: [
    {
      files: TYPESCRIPT_FILES,
      parserOptions: {
        project: true, // <- 添加此配置指明你项目中 tsconfig.json 的位置
        tsconfigRootDir: __dirname
      }
    }
  ]
};
