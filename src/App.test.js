// Copyright 2020 W3 Finance authors & contributors

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {addressFromPhrase} from "./App";
import {cryptoWaitReady} from "@polkadot/util-crypto/init";

/*
 * Test generate Polkadot address
 * Phrase: 'screen saddle give bus insane win unique space over close shaft layer'
 * sr25519
 * PublicKey: 0x1ec2cd82a4435b24f5473cf3a41a0204de69b8b0dfa97f189fe103e50452e457
 * Address: 1hLJhCSBkbqD4uXbbxvnLXDRQZkF9QcCYjfWPCCCxtxzsjQ
 */
test('Test generate Polkadot address!', async () => {
    await cryptoWaitReady();
    let result = addressFromPhrase('screen saddle give bus insane win unique space over close shaft layer', 'polkadot', 'sr25519')
    expect(result).toEqual({address: '1hLJhCSBkbqD4uXbbxvnLXDRQZkF9QcCYjfWPCCCxtxzsjQ', publicKey: '0x1ec2cd82a4435b24f5473cf3a41a0204de69b8b0dfa97f189fe103e50452e457'}); // 使用toEqual
});

/*
 * Test generate Kusama address
 * Phrase: 'escape pudding smile super visual cook price creek special three setup nerve'
 * sr25519
 * PublicKey: 0xf8d9893a712f06d6d70c8abf19f2c2373975a5ce571f76493026f3b6cc52e120
 * Address: JCc1pN8hp5Ujd59Y7Ao1Dr5haP4t8yxwQbRgdwdzZBcmW3o
 */
test('Test generate Kusama address!', async () => {
    await cryptoWaitReady();
    let result = addressFromPhrase('escape pudding smile super visual cook price creek special three setup nerve', 'kusama', 'sr25519')
    expect(result).toEqual({address: 'JCc1pN8hp5Ujd59Y7Ao1Dr5haP4t8yxwQbRgdwdzZBcmW3o', publicKey: '0xf8d9893a712f06d6d70c8abf19f2c2373975a5ce571f76493026f3b6cc52e120'}); // 使用toEqual
});

/*
 * Test generate Edgeware address
 * Phrase: 'fabric return business want memory maze onion crisp lend tonight remind crazy'
 * sr25519
 * PublicKey: 0xe6ba58085d645aec97ec96eeecb516235e5d75916e6bf865c9ef0603a1916555
 * Address: nj9BMhYbht2DqPMXNZB2CdMHK8kY6FVMK6ZbSqKsGtPc8Ff
 */
test('Test generate Edgeware address!', async () => {
    await cryptoWaitReady();
    let result = addressFromPhrase('fabric return business want memory maze onion crisp lend tonight remind crazy', 'edgeware', 'sr25519')
    expect(result).toEqual({address: 'nj9BMhYbht2DqPMXNZB2CdMHK8kY6FVMK6ZbSqKsGtPc8Ff', publicKey: '0xe6ba58085d645aec97ec96eeecb516235e5d75916e6bf865c9ef0603a1916555'}); // 使用toEqual
});
