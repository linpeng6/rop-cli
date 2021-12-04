const util = require('util');
const downloadGitRepo = require('download-git-repo');
const path = require('path');
const ora = require('ora');
const chalk = require('chalk');

function wrapLoading(func, url, targetDir, message) {
  return new Promise(async(resolve, reject) => {
    //初始化
    const spinner = ora(message);
    //加载动画
    spinner.start();
    spinner.color = 'green';
    spinner.text = 'template is loading';
    try{
      await func(url,targetDir,{clone:true});
      spinner.succeed('download succeed') ; 
      resolve(true)
    }catch(error){
      spinner.fail('download fialed');
      reject(false);
    }
  })
}

class Generator {
  constructor(name, targetDir) {
    // 目录名称
    this.name = name;
    // 创建位置
    this.targetDir = targetDir;

    //让其支持promise
    this.downloadGitRepo = util.promisify(downloadGitRepo)
  }

  // 下载文件
  async download() {
    const requestUrl = 'github:linpeng6/orc-template#main';
   
    //调用下载方法
    const res = await wrapLoading(
      this.downloadGitRepo,
      requestUrl, // 参数1: 下载地址
      path.resolve(process.cwd(), this.targetDir), // 参数2: 创建位置
      'waiting download template', // 加载提示信息
    )

    if(!res) return;

    console.log(`\r\nSuccessfully created project ${chalk.cyan(this.name)}`)
    console.log(`\r\n  cd ${chalk.cyan(this.name)}`)
    console.log('  npm start\r\n')
  }

  // 创建
  async create() {
    await this.download()
  }

}

module.exports = Generator;
