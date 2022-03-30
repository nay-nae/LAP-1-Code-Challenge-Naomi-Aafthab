const app = require ('./app');
const port = 5001;

app.listen(port,() => {
    console.log (`Welcome to the Google Clone at http://localhost:${port}`);
});
