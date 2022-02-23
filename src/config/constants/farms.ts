import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'LIQD',
    lpAddresses: {
      97: '',
      56: '0xacC6D4bB383948E1a4e1DF35272E6936c3a4A201',
    },
    isTokenOnly: true,
    token: tokens.liqd,
    quoteToken: tokens.busd,
  },
  {
    pid: 1,
    lpSymbol: 'LIQD-BNB',
    lpAddresses: {
      97: '',
      56: '0xC680DCC0b7c588DfD2bdE19f543E37Dfd276ae31',
    },
    token: tokens.liqd,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'LIQD-BUSD',
    lpAddresses: {
      97: '',
      56: '0xacC6D4bB383948E1a4e1DF35272E6936c3a4A201',
    },
    token: tokens.liqd,
    quoteToken: tokens.busd,
  },
  {
    pid: 3,
    lpSymbol: 'LIQD-USDT',
    lpAddresses: {
      97: '',
      56: '0x5B8d590b63Cb5f0Cac7e1D4936bCd4e6526F54F8',
    },
    token: tokens.liqd,
    quoteToken: tokens.usdt,
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
  },
  {
    pid: 5,
    lpSymbol: 'CAKE-BNB',
    lpAddresses: {
      97: '',
      56: '0x0eD7e52944161450477ee417DE9Cd3a859b14fD0',
    },
    token: tokens.cake,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 6,
    lpSymbol: 'BTCB-BNB',
    lpAddresses: {
      97: '',
      56: '0x61EB789d75A95CAa3fF50ed7E47b96c132fEc082',
    },
    token: tokens.btcb,
    quoteToken: tokens.wbnb,
  },
]

export default farms
