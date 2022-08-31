import minimist from 'minimist';
const args = minimist(process.argv.slice(2));
import dotenv from 'dotenv';
dotenv.config({ path: args.config || './config/.env' });

export const chzAddress = process.env.CHZ_ADDRESS;
export const wsProvider = process.env.WS_PROVIDER;

const config = { chzAddress, wsProvider };

export default config;
