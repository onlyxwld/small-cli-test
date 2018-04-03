'use strict';

const exec   = require('child_process').exec;
const co     = require('co'); // 异步流程控制工具，用更舒服的方式写异步代码。
const prompt = require('co-prompt'); // 可以自动提供提示信息，并且分步接收用户的输入
const config = require('../templates'); // 模板信息文件
const chalk  = require('chalk'); // 颜色插件
const fs     = require('fs'); // 文件系统模块
const print  = console;

module.exports = () => {
  co(function *(){
    // 处理用户输入
    let tplName = yield prompt('Template name: ');
    let projectName = yield prompt('Project name: ');
    let gitUrl;
    let branch;

    if (!config.tpl[tplName]) {
      print.log(chalk.red('\n x Template does not exit!'));
    }
    gitUrl = config.tpl[tplName].url;
    branch = config.tpl[tplName].branch;

    // git命令，
    // 从远程仓库克隆到自定义目录
    // 并切换到对应的分支
    let cmdStr = `git clone ${gitUrl} ${projectName} && cd ${projectName} && git checkout ${branch}`;

    exec(cmdStr, (error, stdout, stderr) => {
      if (error) {
        print.log(error);
        process.exit();
      }
      print.log(chalk.green('\n √ Generation completed!'));
      print.log(`\n cd ${projectName} && yarn install \n`);
      process.exit();
    });
  });
};