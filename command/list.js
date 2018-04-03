'use strict';

const config = require('../templates'); // 模板信息文件
const print  = console;

module.exports = () => {
  print.log(config.tpl);
  process.exit();
};