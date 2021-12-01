const program = require('commander');
const create = require('../lib/create');
/**
 * 创建
 */
program
    .version('0.1.0')
    .command('create <name>')
    .option('-f, --force', 'overwrite target directory if it exist')
    .description('create a new project')
    .action((name,options) => {
        create(name,options)
    })

/**
 * 监听--help
 */
program.on('--help',()=>{
    console.log(1)
})

program.parse()
