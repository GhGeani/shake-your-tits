const app = require('express')();

app.get('/', (req, res) => {
    res.sendFile(require('path').join(__dirname + '/public/index.html'));
});

app.use(require('express').static('public'));

app.listen(process.env.PORT || 3000);