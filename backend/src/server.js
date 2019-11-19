const express = require ('express');
const mongoose = require ('mongoose');
const cors = require ('cors');
const path = require('path');

const routes = require('./routes');
const app = express();

mongoose.connect('mongodb+srv://giulia:290507@oministack-6qpyb.mongodb.net/aulas?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors ())
app.use(express.json());
app.use('/files' , express.static(path.resolve(__dirname, '..', 'uploads')))
app.use(routes);

app.listen(1508);

