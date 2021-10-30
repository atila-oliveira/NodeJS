const fs = require ('fs');

const caminho = __dirname + "/arquivo.json";

//sincrono... (não recomendado para arquivos grandes)
const conteudo = fs.readFileSync(caminho,'utf-8')
console.log(conteudo)

//assincrona...
fs.readFile(caminho,'utf-8', (erro, conteudo) =>{
    const config = JSON.parse(conteudo);
    console.log(`${config.db.host}:${config.db.port}`)

})

const teste = require('./arquivo.json')
console.log(teste.db)

fs.readdir(__dirname,(erro,arquivos) => {
    console.log('1conteúdo da pasta...')
    console.log(arquivos)
})