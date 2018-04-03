'use strict';

const co     = require('co'); // 异步流程控制工具，用更舒服的方式写异步代码。
const prompt = require('co-prompt'); // 可以自动提供提示信息，并且分步接收用户的输入
const config = require('../templates'); // 模板信息文件
const chalk  = require('chalk'); // 颜色插件
const fs     = require('fs'); // 文件系统模块
const print  = console;

module.exports = () => {
  co(function *() {

    // 分布接收用户输入的参数
    let tplName = yield prompt('Template name: ');
    let gitUrl = yield prompt('Git https link: ');
    let branch = yield prompt('Branch: ');

    // 避免重复添加
    if (!config.tpl[tplName]) {
      config.tpl[tplName] = {};
      config.tpl[tplName]['url'] = gitUrl.replace(/[\u0000-\u0019]/g, '');// 过滤unicode特殊字符
      config.tpl[tplName]['branch'] = branch;
    } else {
      print.log(chalk.red('Template has already existed!'));
      process.exit();
    }

    // 把模板信息写入templates.json
    fs.writeFile(__dirname + '/../templates.json', JSON.stringify(config), 'utf-8', (err) => {
      if (err){
        print.log(err);
      }
      print.log(chalk.green('New template added!\n'));
      print.log(chalk.grey('The last template list is: \n'));
      print.log(config);
      print.log('\n');
      process.exit();
    });
  });
};