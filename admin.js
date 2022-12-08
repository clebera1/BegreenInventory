
//======================================================
//Database

const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
const ProjectSchema = new mongoose.Schema({

    lote: { type: Number,
            required: true,
    },
    variedade: {

    },
    quantidade: {
        type: Number,
    },
    bancada :{
        type: Number,
    },
    data_plantio: { type: Date, default: Date.now },

});

const Project = mongoose.model("Project", ProjectSchema);
console.log("Debugging")

//======================================================
//Admin Bro
const AdminBro = require('admin-bro')
const AdminBroExpress = require('@admin-bro/express')
const AdminBroMongoose = require('@admin-bro/mongoose')

// use mongoose in AdminBro
console.log("Debugging")

AdminBro.registerAdapter(AdminBroMongoose)

//config 

const adminBroOptions = new AdminBro({
    resources: [
    {
        resource: Project,
        options: {
            properties:{
                bancada: { },
                lote: { },
                quantidade: { },
                variedade:{ },
            }
        }
    }
    ],

    locale : {
        translations: {
            labels: {
                Project: 'Plantio'
            }
        }
    },



    rootpath: '/admin'
})

const router = AdminBroExpress.buildRouter(adminBroOptions)
console.log
//======================================================
//Server 

const express = require("express");
const { text } = require("express");
const server = express();

  server.use(adminBroOptions.options.rootPath, router);



//======================================================
//Run app

const run = async () => {
    // mongoose.set('strictQuery', false);
    await mongoose.connect("mongodb://localhost/adminbroapp", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    await server.listen(5500, () => console.log("Server started"));
};

run();




