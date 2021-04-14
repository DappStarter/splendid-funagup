require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'inflict lock bone system educate rare remain solid hover arctic tail there'; 
let testAccounts = [
"0x4c2e59dbe9156aa42b75421b92a618366d77f9050a5e4ad93550c77712f908d4",
"0xfd76675b9cf520be55948c57a1e54d2a5af3e8e64b153915afddcf6b397f825f",
"0x8cc8e2fee0dd48690ea3e0c6c409f20c0462938798e4a76224334020456fd727",
"0x08b4da2fda8bb2711a45af481cf6a31ed08012a7c11f8e2f793ece0a019e6f8e",
"0x78dba83c70beef82ae8702ae7a9a160b05b5ed3242c63702777ee149ee9145b5",
"0x8f6cc8f22356028c13d63ae727fc93c87c1dc93742b0d3ce22d51a04f44e4a26",
"0xa43b0115e16b5a2373e6afdcce7b297c4a5f8dca615c0dee563493ee4f6b98ad",
"0x07da764510701a15fe68d3351235fa6d1ad969493827e6613be16f4b4c19baaa",
"0xc5948c9df261ed53d9a474f7eb0396cb3416df9b96a4b50d037e0b81953cb8e7",
"0x96953f389b22f51009cd29cc9f73737057587dde3388a43288c18c3ba3ea9600"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


