const fs = require('fs/promises');
const { constants } = require('fs');
const Promise = require('bluebird');
const util = require('util');
const execSh = require('exec-sh')

const execAsync = util.promisify(execSh);

const { OUTPUT_MAIN } = process.env;

const parsing = async ()=> {
    await fs.access(OUTPUT_MAIN, constants.F_OK)
    const data = await fs.readFile(OUTPUT_MAIN)
    const { children: json } = JSON.parse(data).document.children[0]
    await Promise.map(json, (child) => {
      return fs.writeFile(`output/${child.name}.json`, JSON.stringify(child))
    })

    let dir = await fs.readdir('output')
    dir.forEach((o, i) => {
        if(o === "main.json"){
            delete  dir[i]
        }
    })

    await Promise.map(dir.filter(o=>o), (file)=> {
        return execAsync(`npx json-beautify -f "output/${file}" -r`, null)
    })
};

module.exports = parsing;
