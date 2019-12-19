require('dotenv').config();

const server = require('./data/server.js');

const PORT = process.env.port || 5000;
server.listen(PORT, () => {
  console.log(`\n*** Server runnng at http://localhost:${PORT}... ***\n`);
});
