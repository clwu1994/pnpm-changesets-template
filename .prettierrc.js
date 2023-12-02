module.exports = {
  semi: false, // 在语句末尾，仅在可能导致 ASI 失败的行开头添加分号
  trailingComma: 'none', // 在多行逗号分隔的语法结构中, 没有尾随逗号
  arrowParens: 'avoid', // 在唯一的箭头函数参数周围, 尽可能省略括号
  tabWidth: 2, // 指定每个缩进级别的空格数
  singleQuote: true, // 使用单引号而不是双引号
  printWidth: 100, // 最大行长度字符数
  bracketSpacing: true, // 对象字面量之间保留空格
  bracketSameLine: true // 将多行 HTML（HTML、JSX、Vue、Angular）元素的 > 放在最后一行的末尾，而不是单独放在下一行（不适用于自闭合元素）
}
