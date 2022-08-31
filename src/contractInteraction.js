import ethers from 'ethers';

import { chzAddress } from '../config/config.js';

const contractInteraction = (req, res) => {
    if (req.query.txHash) {
        const provider = new ethers.providers.EtherscanProvider();
        provider.getTransactionReceipt(req.query.txHash).then(tx => {
            const interacted = tx.to == chzAddress || tx.logs.some(log => {
                if (log.address == chzAddress) res.status(200).json({ res: `Transaction ${tx.transactionHash} interacted with CHZ contract.` });
                return log.address == chzAddress;
            });

            if (interacted) {
                res.status(200).json({ res: `Transaction ${tx.transactionHash} did interact with CHZ contract.` });
            } else {
                res.status(200).json({ res: `Transaction ${tx.transactionHash} did not interact with CHZ contract.` });
            }
        }).catch(() => res.status(200).json({ res: `Please, provide a valid transaction hash.` }));
    } else {
        res.status(200).json({ res: `Please, give a txHash argument.` });
    }
};

export default contractInteraction;
