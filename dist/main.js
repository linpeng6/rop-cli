"use strict";

const program = require('commander');

const create = require('../lib/create');

const chalk = require('chalk');

const figlet = require('figlet');
/**
 * 创建
 */


program.version('0.1.0').command('create <name>').option('-f, --force', 'overwrite target directory if it exist').description('create a new project').action((name, options) => {
  create(name, options);
});
/**
 * 监听--help
 */

program.on('--help', () => {
  // 使用 figlet 绘制 Logo
  console.log('\r\n' + figlet.textSync('ropcli', {
    font: 'Ghost',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 80,
    whitespaceBreak: true
  }));
  console.log(`\r\nRun ${chalk.cyan(`rop <command> --help`)} show details\r\n`);
});
/**
 * 解析用户执行命令
 */

program.parse();