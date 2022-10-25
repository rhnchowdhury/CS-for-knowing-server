const express = require('express')
const app = express();
const port = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send("Creating server side");
});

app.listen(port, () => {
    console.log("cse site", port)
})