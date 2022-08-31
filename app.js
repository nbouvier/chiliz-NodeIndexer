import express from 'express';
import minimist from 'minimist';
const args = minimist(process.argv.slice(2));

import router from './router.js';
import indexer from './src/indexer.js';

const port = args.port || 80;
const app = express();

app.use('/', router);

app.listen(port, err => {
    if (err) console.log(err);
    console.log(`Server listening on port ${port}.`);
});

indexer();

export default app;
