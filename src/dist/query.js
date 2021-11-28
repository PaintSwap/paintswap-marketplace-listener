#!/usr/bin/env ts-node
"use strict";
/* eslint-disable no-console */
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const lib_1 = require("./lib");
const provider = new ethers_1.ethers.providers.JsonRpcProvider('https://rpc.ftm.tools/');
const marketplace = new lib_1.MarketplaceV2(provider);
const QueryID = 68897; // https://paintswap.finance/marketplace/68897
marketplace.getSaleDetails(ethers_1.ethers.BigNumber.from(QueryID)).then((details) => {
    console.log(`Sale details for sale ${QueryID}:\n`, details);
});
marketplace.getNextMinimumBidOrOffer(ethers_1.ethers.BigNumber.from(QueryID)).then((next) => {
    console.log(`Next minimum bid or offer for sale ${QueryID}: `, `${ethers_1.ethers.utils.formatEther(next.toString())} $FTM`);
});
