const app = require('./app');
const route = require('./route');
const port = 3003;

app.listen(port, () => {
  console.log(`Servidor iniciado na http://localhost:${port}`);
});

app.use('/', route);