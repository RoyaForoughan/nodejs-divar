const express = require('express')
const  dotenv = require('dotenv')
const SwaggerConfig = require('./src/config/swagger.config')
dotenv.config()
async function main(){
    const app = express()
    SwaggerConfig(app)
    const port = process.env.port
    require('./src/config/mongoose.config')
    app.listen(3000 , ()=>{
        console.log(`server: http://localhost:${port}`);
    })
}

main()