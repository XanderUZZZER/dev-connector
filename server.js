const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('API running'));
app.get('/temp', (req, res) => res.send('API running - temp route'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => { console.log(`Server started on ${PORT} port`); });