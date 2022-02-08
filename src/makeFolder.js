const {constants} = require('fs')
const fs = require('fs/promises')

const makeFolder = async ()=> {
    try{
        await fs.access('output', constants.F_OK)
    }catch(err){
        fs.mkdir('output')
    }
}

module.exports = makeFolder