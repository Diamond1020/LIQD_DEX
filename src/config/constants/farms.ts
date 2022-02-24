import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'LIQD',
    lpAddresses: {
      97: '',
      56: '0xeacCD96a9Af75364583D16cE32c8124eC6DE6a9d',
    },
    isTokenOnly: true,
    token: tokens.liqd,
    quoteToken: tokens.busd,
  },
  {
    pid: 1,
    lpSymbol: 'LIQD-BUSD',
    lpAddresses: {
      97: '',
      56: '0xeacCD96a9Af75364583D16cE32c8124eC6DE6a9d',
    },
    token: tokens.liqd,
    quoteToken: tokens.busd,
  },
  {
    pid: 2,
    lpSymbol: 'LIQD-USDT',
    lpAddresses: {
      97: '',
      56: '0x27a083832D99D113F28ef519056344cf0cb36D61',
    },
    token: tokens.liqd,
    quoteToken: tokens.usdt,
  },
  {
    pid: 3,
    lpSymbol: 'LIQD-USDC',
    lpAddresses: {
      97: '',
      56: '0xCE2ce35f4977D95FB9819137c18BA2545b53B10a',
    },
    token: tokens.liqd,
    quoteToken: tokens.usdc,
  },
  {
    pid: 4,
    lpSymbol: 'BUSD-BNB',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    token: tokens.busd,
    quoteToken: tokens.wbnb,
  }
]

export default farms
