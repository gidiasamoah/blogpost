const express = require('express')
const blogs = require('./src/routes/blog')
const app = express();

app.use(express.json())

const PORT = 700;

app.listen(PORT, () => {
    console.log(`Application running on port ${PORT}`);

})

app.use('/blog', blogs)

module.exports = app;