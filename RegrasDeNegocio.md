<h1>Inventario BeGreen</h1>

>Status: Developing 

## It's a simple CRUD Project planned by me to make my Job at BeGreen easier.

## Overview

### In my job we have some issues that I wanted to solve, one of them is the difficult of make an inventory about all the products that are on the farm. In resume, we have to make a note of all of ours activitys and them, when we need to make the inventory of products we dont have a place where we can confer that notes, therefore we need to make all of our notes one more time, which make us lose our time and be less productive.

## In this project I need some fields, which is:

+ id
+ benches
+ variety 
+ allotment
+ amount 


## In addition to CRUD, I implement other features such as:

* See the more recently variety planted on a bench
* Search varietys by their id or name
* See which variety/allotment is planted on the benches


<!-- =============================

Projeto desenvolvido para facilitar a vida dos funcionarios da Begreen - Fazendas Urbanas. Com ele conseguimos apontar a bancada, lote, dia de plantio e colheita das variedades e buscarmos pelas variedades utilizando esses parametros de forma clara, objetiva e intuitiva. Assim sendo, nao precisamos contar toda a fazenda novamente para fazermos o inventario.


BANCADA
VARIEDADE
LOTE 
DT PLANTIO 
DT COLHEITA



COMO ACESSAR O PROGRAMA:

1. Rodar no Terminal "npm i @admin-bro/mongoose mongoose"

2. Rodar no terminal "node admin.js"




```
 
//=======================================================
//Admin Bro

const AdminBro = require('admin-bro')
const AdminBroExpress = require('@admin-bro/express')

const adminBro = new AdminBro({
    databases: [],
    rootpath: '/admin',
})

const router = AdminBroExpress.buildRouter(adminBro)

//========================================================
//Server 

const express = require("express");
const server = express();

server 
    .use(adminBro.options.rootPath, router)
    .listen(5500, () => console.log("Server started"));

//======================================================
//Database

```
-->