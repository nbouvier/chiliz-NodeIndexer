import minimist from 'minimist';
const args = minimist(process.argv.slice(2));
import dotenv from 'dotenv';
dotenv.config({ path: args.config || './config/.env' });

export default {
    chzAddress: process.env.CHZ_ADDRESS,
    wsProvider: process.env.WS_PROVIDER
};
