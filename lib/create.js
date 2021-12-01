const path = require('path')
const fs = require('fs-extra')
const inquirer = require('inquirer');
const Generator = require('./Generator');
module.exports = async function (name, options) {
    //当前命令行选择的目录
    const cwd = process.cwd();

    //需要创建的目录地址
    const targetDir = path.join(cwd, name);

    //判断目录是否存在
    if (fs.existsSync(targetDir)) {

        if (options.force) {
            await fs.remove(targetAir);
        } else {
            //询问用户是否覆盖
            const { action } = await inquirer.prompt([
                {
                    name: 'action',
                    type: 'list',
                    message: 'directory already exists Pick an action:',
                    choices: [
                        {
                            name: 'yes',
                            value: 'yes'
                        }, {
                            name: 'no',
                            value: false
                        }
                    ]
                }
            ])

            if (!action) {
                //不覆盖
                return;
            } else if (action === 'yes') {
                // 移除已存在的目录
                console.log(`\r\nRemoving...`)
                await fs.remove(targetDir)
            }
        }
    }

    // 下载模板文件
    const generator = new Generator(name,targetDir);

    // 创建
    generator.create();
}