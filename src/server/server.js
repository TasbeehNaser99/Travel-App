const path = require ('path');
const express = require ('express');
const app =express();

app.use(express.static('dist'));

app.get('/',(req, res)=> {
    res.sendFile(path.resolve('dist/index.html'));
})

const port = 3000;
const server = app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
module.exports = server;