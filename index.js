const ethWallet = require('ethereumjs-wallet').default;
for(let index=0; index < 3; index++) {
    let addressData = ethWallet.generate();
    console.log(`${addressData.getAddressString()},${addressData.getPrivateKeyString()}`);
}
