const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

function SwaggerConfig(app){
    const swaggerDocument = swaggerJSDoc({
        swaggerDefinition:{
            info:{
                title:'divar-backend',
                description:'my sample project',
                version:'1.0.0'
            }
        },
        apis:[]
    })
    const swagger = swaggerUi.setup(swaggerDocument,{})
    app.use('/' , swaggerUi.serve , swagger)
}

module.exports = SwaggerConfig