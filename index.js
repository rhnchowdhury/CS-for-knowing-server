const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors());

const subList = require('./data/list.json');
const subShow = require('./data/subject.json');


app.get('/sub-list', (req, res) => {
    res.send(subList);
});

app.get('/subList/:id', (req, res) => {
    const id = req.params.id;
    const selectedSub = subShow.find(sub => sub.id === id);
    res.send(selectedSub);
});

app.get('/subject/:id', (req, res) => {
    const id2 = req.params.id;
    // if (id2 === '08') {
    //     res.send(subShow)
    // }
    // else {
    //     const subDetails = subShow.find(s => s.sub_id == id2);
    //     res.send(subDetails);
    // }
    const subDetails = subShow.filter(s => s.sub_id == id2);
    res.send(subDetails);

});

app.get('/subject', (req, res) => {
    res.send(subShow);
});

app.get('/', (req, res) => {
    res.send("Creating server side");
});

app.listen(port, () => {
    console.log("cse site", port)
})