const express = require("express");
const sources = require('./routes/routes')

const app = express();
app.use(sources);


require('./sources/nyt')


const PORT = process.env.PORT || 5000;
app.listen(PORT);