const server = require('./www/bin/app');


const port = 3003;


require('dotenv').config();


server.listen(port, () => {console.log(`server is successfully connected on port: ${port}`)});