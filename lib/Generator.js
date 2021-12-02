const util = require('util');
const downloadGitRepo = require('download-git-repo');
const path = require('path');
const ora = require('ora');

async function wrapLoading(func,url,targetDir,message){
  console.log(targetDir)
  const spinner = ora(message);
  spinner.start();
  setTimeout(async () => {
    spinner.color = 'green';
    spinner.text = 'template is loading';
    const err = await func(url,targetDir);
    spinner.stop(); // 停止
    err ? spinner.fail('download err') : 
      spinner.succeed('download succeed') ; 
  }, 2000);
}

class Generator {
    constructor (name, targetDir){
      // 目录名称
      this.name = name;
      // 创建位置
      this.targetDir = targetDir;

      //让其支持promise
      this.downloadGitRepo = util.promisify(downloadGitRepo)
    }

    // 下载文件
    async download(){
        const requestUrl = 'github:linpeng6/orc-template#main';

        // 2）调用下载方法
        await wrapLoading(
          this.downloadGitRepo,
          requestUrl, // 参数1: 下载地址
          path.resolve(process.cwd(), this.targetDir), // 参数2: 创建位置
          'waiting download template', // 加载提示信息
        )
    }

    // 创建
    async create(){
        await this.download()
    }

  }
  
  module.exports = Generator;
  