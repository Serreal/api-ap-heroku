const express = require('express');
const app = express();
var cors = require('cors');

app.use(
    cors({
        credentials: true,
        origin: 'https://unruffled-sammet-52a8ec.netlify.app'
    })
);
app.options('*', cors());

app.get('/', (req, res) => res.send('Test string Assignment #1'));

app.listen(process.env.PORT || 3000, function() {
    console.log('server running on port 3000', '');
});
