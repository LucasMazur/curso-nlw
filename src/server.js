// IMPORTAR DEPENDENCIA
const express = require('express');
//assistente de DIRETORIOS do NODE 
const path = require('path')

const pages = require('./pages.js')
// INICIANDO O EXPRESS  
const server = express()
server
    //utilizar body do request
    .use(express.urlencoded({ extended: true}))
    //utilizando os arquivos estaticos
    .use(express.static('public'))
    // CONFIGURAR TEMPLATE ENGINE
    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')
    // ROTAS DA APLICAÇÃO
    .get('/', pages.index)
    .get('/representante', pages.representante)
    .get('/representantes', pages.representantes)
    .get('/create-representante', pages.createRepresentante)
    .post('/save-representante', pages.saveRepresentante)

// LIGAR O SERVIDOR
server.listen(5500)