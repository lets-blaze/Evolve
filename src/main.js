const { Blockchain, Transaction } = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const mykey = ec.keyFromPrivate('849861a721346eb21dccbfd4ad3f3a5909677c93883b0fe41cfe206a85551b8a');

const myWalletAddress = mykey.getPublic('hex');


let Evolve = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'address2', 1);
tx1.signTransaction(mykey);
Evolve.addTransaction(tx1);

const tx2 = new Transaction(myWalletAddress, 'address1', 2);
tx2.signTransaction(mykey);
Evolve.addTransaction(tx2);

console.log('\n Starting the miner...');
Evolve.minependingTransactions('myWalletAddress');

console.log();
console.log(`Balance of X is ${Evolve.getBalanceOfAddress(myWalletAddress)}`);

console.log();
console.log('Blockchain valid?', Evolve.isChainValid() ? 'Yes' : 'No');
