#!/usr/bin/env node --harmony
'use strict';

// 引入commander
const program = require('commander');

// 定义脚手架的文件路径
process.env.NODE_PATH = __dirname + '../node_modules/';

// 定义当前版本 (版本信息写在package.json文件中)
program
  .version(require('../package').version);

// 定义使用方法
program
  .usage('<command>');

// 添加指令
program
  .command('add')
  .description('Add a new template')
  .alias('a')
  .action(() => {
    require('../command/add')();
  });

// 罗列指令
program
  .command('list')
  .description('List all the templates')
  .alias('l')
  .action(() => {
    require('../command/list')();
  });

// 生成器指令
program
  .command('init')
  .description('Generate a new project')
  .alias('i')
  .action(() => {
    require('../command/init')();
  });

// 删除指令
program
  .command('delete')
  .description('Delete a template')
  .alias('d')
  .action(() => {
    require('../command/delete')();
  });

// 处理参数和提供帮助信息
program.parse(process.argv);

// !0 => true
// 如果没有参数，就提示信息
// [疑问] !的运算效率，比 == 号要快吗？
if (!program.args.length) {
  program.help();
}
