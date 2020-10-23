const express = require('express');
const swaggerUi = require('swagger-ui-express')
const app = express();
app.use(express.json());
const swaggerFile = require('./swagger_output.json')
const bodyParser = require('body-parser')





 app.get('/', (req, res) => {
res.send('Welcome to Edurekas REST API with Node.js Tutorial!!');
});

 
 

 
//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));

/* Middlewares */
app.use(bodyParser.json())
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))


require('./src/api/userController')(app);