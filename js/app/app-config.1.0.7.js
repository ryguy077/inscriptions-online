/**
 * GLOBAL
 */

// main: 'main', signet/testnet: 'tb'
let encodedAddressPrefix = 'main';

// mainnet: '', 'signet/', 'testnet/'
let mempoolNetwork = '';

/**
 * INSCRIPTIONS
 */

// default padding as of ord native wallet
let padding = 10000;

// signet
//let tippingAddress = 'tb1pkjs7aww5m2muw5jpfxfrs4849dyjtp7camnqymlxt5mwmzy440xqe864rg';

// main
let tippingAddress = 'bc1pa4e7e4ng3h2xxpfn2xly0kqvk6jfvfu29uf5uwzlel5qtk08zf2sq90xpd';

// enabled plugins (appear in 'special' if any)
let plugins = [

    {
        name : 'satsresolver',
        file : 'satsresolver.1.0.0.js',
        instance : null
    },
    {
        name : 'byteperfectevm',
        file : 'byteperfectevm.1.0.1.js',
        instance : null
    },
    {
        name : 'byteperfectsol',
        file : 'byteperfectsol.1.0.0.js',
        instance : null
    },
    {
        name : 'loot',
        file : 'loot.1.0.3.js',
        instance : null
    }
];
