const express = require('express');
const serverless = require('serverless-http');
const graphqlHTTP = require('express-graphql');
const schema = require('../schema');
const cors = require('cors');
const path = require('path');

const app = express();

const router = express.Router();

app.use(cors());

app.use(
  '/.netlify/functions/api',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.use(express.static('public'));

router.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

module.exports = app;
module.exports.handler = serverless(app);
