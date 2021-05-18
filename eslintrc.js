module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'array-bracket-spacing': [1, 'never'], // 数组紧贴括号部分不允许包含空格。
    camelcase: [2], // 驼峰命名
    eqeqeq: [2], // 非强制使用全等于
    indent: [2, 4, { SwitchCase: 1 }], // 强制使用4个空格作为缩进层次
    'max-len': [2, { code: 120 }], // 每行不得超过 `120` 个字符
    'object-curly-spacing': [2, 'never'], // 对象紧贴花括号部分不允许包含空格。
    'block-spacing': [2, 'never'], // 单行代码块中紧贴括号部分不允许包含空格。
    semi: [2, 'always'], // 语句末尾添加分号
    'space-before-function-paren': [2, 'never']
  }
}
