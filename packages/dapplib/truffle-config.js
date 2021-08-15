require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glide fringe skull drift return still snake inflict civil army giggle'; 
let testAccounts = [
"0x6a0289a9cbb158559bcfd420323b4366f067f263ce083fc97b5e50aed55fcacb",
"0x735e4abcf3e3f2c20bd567ea591c8550d85bd4d45a488de519edcdda88216807",
"0x3892de94c0d552e4f4ae67f63a2dd990e95c880bb6ffe68588587870a408b7d8",
"0x7ddc59d77412bc679110b59214f7c5cf37cc76b72c6f1e842626fa1da8fd42ac",
"0x8cc3876bcbe611aa8016caeb1910a8178ed228945b7cf019231495403b1b7c14",
"0xd7bf552005f002e82c49c3438dcd890cd77984d3d0ab998a423f7b20a5fd7a9a",
"0x6cc3a2132b48fe912f2ae29248e37c3d787e2e7034770e64be04f0f4c71e1de6",
"0x8e23e108f6f3a5a0e002d8b477c14031f2c58da23519e58bee0476e4b668a302",
"0xa1228235b381530e9c316d843397cb69224b9f5d449c9e71f30f763b9e26f1dd",
"0x1785b4948a8a4f30764f35376b9458770c0bc54d7bdb7c95feea50e4ae82f4f7"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


