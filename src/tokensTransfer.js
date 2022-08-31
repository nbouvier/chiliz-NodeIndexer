import ethers from 'ethers';
import store from './store.js';

const toEther = ethers.utils.formatEther;

const tokensTransfer = (req, res) => {
    const address = req.query.address;
    if (address) {
        const addressData = store.transfers[address];
        if (addressData) {
            res.status(200).json({ res: `${address.substr(0,5)}..${address.substr(-5,5)} sent ${toEther(addressData.tokensSent)} CHZ in ${addressData.totalTransfers} transactions.` });
        } else {
            res.status(200).json({ res: `${address.substr(0,5)}..${address.substr(-5,5)} didn't sent any CHZ.` });
        }
    } else {
        res.status(200).json({ res: `${toEther(store.transfers.totalTokensSent)} CHZ has been sent in ${store.transfers.totalTransfers} transactions.` });
    }
};

export default tokensTransfer;
