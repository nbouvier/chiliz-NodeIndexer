import { BigNumber } from 'ethers';

var store = {
    transactions: [],
    transfers: {
        totalTransfers: BigNumber.from(0),
        totalTokensSent: BigNumber.from(0)
    },
    initTransfer: function (address) {
        if (!this.transfers[address]) {
            this.transfers[address] = {
                totalTransfers: 0,
                tokensSent: BigNumber.from(0),
                tokensReceived: BigNumber.from(0)
            }
        }
    }
};

export default store;
