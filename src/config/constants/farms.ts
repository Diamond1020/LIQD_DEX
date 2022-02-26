import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'LIQD',
    lpAddresses: {
      97: '',
      56: '0x5734041F6ed8f5B5f97c6169cf3D9551c441Fe69',
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
      56: '0x5734041F6ed8f5B5f97c6169cf3D9551c441Fe69',
    },
    token: tokens.liqd,
    quoteToken: tokens.busd,
  },
  {
    pid: 2,
    lpSymbol: 'LIQD-USDT',
    lpAddresses: {
      97: '',
      56: '0x6d749CEEab7CD37ff8EeF0263816619d1d0e3Bad',
    },
    token: tokens.liqd,
    quoteToken: tokens.usdt,
  },
  {
    pid: 3,
    lpSymbol: 'LIQD-USDC',
    lpAddresses: {
      97: '',
      56: '0xB86fD1C3B81ceB2247611109c3B58E9Fa6ffE4be',
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
