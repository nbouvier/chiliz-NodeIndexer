import ethers, { Contract, BigNumber } from 'ethers';
import store from './store.js';

import chzAbi from '../abi/chzAbi.json' assert { type: 'json' };
import config from '../config/config.js';
const { chzAddress, wsProvider } = config;

const toEther = ethers.utils.formatEther;
console.log(chzAddress)
const indexer = () => {
    const provider = wsProvider ? new ethers.providers.WebSocketProvider(wsProvider) : new ethers.providers.EtherscanProvider();
    const contract = new Contract(chzAddress, chzAbi, provider);
    contract.on('*', storeTransaction);
};

const storeTransaction = tx => {
    console.log(`[${new Date().toLocaleString()}] New transaction recorded ${tx.transactionHash}.`);
    store.transactions.push(tx.transactionHash);

    if (tx.event == 'Transfer') {
        const from = tx.args.from;
        const to = tx.args.to;
        const value = tx.args.value;
        console.log(`[${new Date().toLocaleString()}] ${from} sent ${toEther(value)} CHZ to ${to.substr(0,5)}..${to.substr(-5,5)}.`);
        if (!store.transfers[from]) store.initTransfer(from);
        if (!store.transfers[to]) store.initTransfer(to);
        store.transfers[from].totalTransfers ++;
        store.transfers[from].tokensSent = store.transfers[from].tokensSent.add(value);
        store.transfers[to].tokensReceived = store.transfers[to].tokensReceived.add(value);
        store.transfers.totalTokensSent = store.transfers.totalTokensSent.add(value);
        store.transfers.totalTransfers ++;
    }
}

export default indexer;
