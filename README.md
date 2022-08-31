# Technical test from Chiliz
## Concept
Write a NodeJs program that could index the Ethereum blockchain in real-time.  
Watch and store any new transactions interacting with the CHZ token smart contract
(0x3506424f91fd33084466f402d5d97f05f8e3b4af).  
Provide two private API endpoints (no need for authentication)  
- One that would allow a user to retrieve the total amount of CHZ transferred
(since the start of the program).
- One that would return whether a transaction is interacting with the CHZ token
smart contract or not given its transaction hash (transaction older than the
program is possible).
## Run the program
Copy ./config/.env.sample to ./config/.env.
> $ npm i
> $ npm run live
## What are the endpoints ?
### /tokens-transfer?address=<address>
The tokens-transfer API allows to get the total amount of CHZ transferred since
the start of the program. If an address is passed as a parameter, it will return
the total amount of CHZ transferred since the start of the program by this address.
### /contract-interaction?txHash=<tx_hash>
The contract-interaction API allows to know if a given transaction did interact
or not with the CHZ token contract.
