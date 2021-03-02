const express = require('express');
const app = express();
var cors = require('cors');

app.use(
    cors({
        credentials: true,
        origin: 'https://jovial-gates-066f2d.netlify.app/'
    })
);
app.options('*', cors());

app.get('/', (req, res) => res.send('Test string Assignment #1'));

app.listen(process.env.PORT || 3000, function() {
    console.log('server running on port 3000', '');
});
