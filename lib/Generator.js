const util = require('util');
const downloadGitRepo = require('download-git-repo');

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
    // download(){
    //     const requestUrl = `orc-template/${repo}${tag?'#'+tag:''}`;

    //     // 2）调用下载方法
    //     await wrapLoading(
    //       this.downloadGitRepo, // 远程下载方法
    //       'waiting download template', // 加载提示信息
    //       requestUrl, // 参数1: 下载地址
    //       path.resolve(process.cwd(), this.targetDir)) // 参数2: 创建位置
    // }

    // 创建
    create(){
        // await this.download()
    }

  }
  
  module.exports = Generator;
  