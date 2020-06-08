const fs = require('fs')
const path = require('path')

exports.manage = class manage{
    constructor() {
        console.log('New Instance of DB Manager Created');
    }
    get(fileName){
    let result =   fs.readdirSync(path.join(__dirname,'../','database'));
    let data = undefined
        console.log(fileName)

            console.log('Contains the file');
            data = fs.readFileSync(path.join(__dirname,'../','database',`${fileName}.json`),'utf-8')
            data = JSON.parse(data);
            console.log(data)

        return data;
    }
    create(fileName,info){
        let data = this.get(fileName);
        info.id = data.length + 1;
        data.push(info);
        this.update(fileName,data);
    }
    update(fileName, info){
        fs.writeFile(path.join(__dirname,'../','database',`${fileName}.json`),JSON.stringify(info));
    }
    delete(fileName, id){
        let data = this.get(fileName);
        data.splice(0,id-1)
        this.update(fileName,data);
    }
}