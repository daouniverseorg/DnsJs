"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var getContractAddress_exports = {};
__export(getContractAddress_exports, {
  getContractAddress: () => getContractAddress
});
module.exports = __toCommonJS(getContractAddress_exports);
const addresses = {
  BaseRegistrarImplementation: {
    '1': '0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85',
    '3': '0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85',
    '4': '0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85',
    '5': '0x7bD1d65640e9Ee51b06a8Ee55b2Ea601704F76E5', //
  },
  DNSRegistrar: {
    '1': '0x58774Bb8acD458A640aF0B88238369A167546ef2',
    '3': '0xdB328BA5FEcb432AF325Ca59E3778441eF5aa14F',
    '5': '0x07df2c090682fC0B664966C6934363eeAB5bC479', //
  },
  ETHRegistrarController: {
    '1': '0x283af0b28c62c092c9727f1ee09c02ca627eb7f5',
    '3': '0xa5627AB7Ae47063B533622C34FEBDb52d3281dF8',
    '4': '0x283af0b28c62c092c9727f1ee09c02ca627eb7f5',
    '5': '0xF8A2898061f31Da7110cC8c706530C0fE65598b7', //
  },
  Multicall: {
    "1": "",
    "5": "0xcA11bde05977b3631167028862bE2a173976CA11",
  },
  NameWrapper: {
    '1': '0x0000000000000000000000000000000000000000',
    '3': '0xF82155e2a43Be0871821E9654Fc8Ae894FB8307C',
    '4': '0x0000000000000000000000000000000000000000',
    '5': '0x396bBd3D9Ff5910f1d192b04F79Ae8f4cD593648', //
  },
  PublicResolver: {
    '1': '0x4976fb03C32e5B8cfe2b6cCB31c09Ba78EBaBa41',
    '3': '0x13F0659Ee6bb7484C884FEeFb7F75C93951ef837',
    '5': '0x202f3A567bB1D7c2d08018faA0798615801752c3', //
  },
  DNSRegistryWithFallback: {
    '1': '0x00000000000c2e074ec69a0dfb2997ba6c7d2e1e',
    '3': '0x00000000000c2e074ec69a0dfb2997ba6c7d2e1e',
    '4': '0x00000000000c2e074ec69a0dfb2997ba6c7d2e1e',
    '5': '0x5340A746A6A9990Bc855214c5a90f3a5851B0d7B', //
  },
  DNSRegistry: {
    "1": "",
    "5": "0x5340A746A6A9990Bc855214c5a90f3a5851B0d7B"
  },
  ReverseRegistrar: {
    '1': '0x084b1c3C81545d370f3634392De611CaaBFf8148',
    '3': '0x806246b52f8cB61655d3038c58D2f63Aa55d4edE',
    '5': '0xeB2c79dCFF3674E35bc45fB4685449D389086291', //
  },
  UniversalResolver: {
    '1': '0x580AF46E06DaaD47eb5940526FD64d95b815Cb70',
    '3': '0x74e20bd2a1fe0cdbe45b9a1d89cb7e0a45b36376',
    '4': '0x74e20bd2a1fe0cdbe45b9a1d89cb7e0a45b36376',
    '5': '0x62a87A519dab75e89f0a5c84EA062838aB21015b', //
  },
  BulkRenewal: {
    '1': '0xfF252725f6122A92551A5FA9a6b6bf10eb0Be035',
    '3': '0x051b02245D826757EfaF5C6209D4D79FB39FBC45',
    '5': '0xB409AE93ebC3936E8770191e3079dB484cA12A4b', //
  }
};
const getContractAddress = (networkId) => (contractName) => {
  try {
    return typeof addresses[contractName] === "string" ? addresses[contractName] : addresses[contractName][networkId];
  } catch {
    throw new Error(
      `No address for contract ${contractName} on network ${networkId}`
    );
  }
};
