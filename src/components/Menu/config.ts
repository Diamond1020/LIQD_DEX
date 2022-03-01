import { MenuEntry } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

const config: (t: ContextApi['t']) => MenuEntry[] = (t) => [
  {
    label: t('Home'),
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: t('Trade'),
    icon: 'TradeIcon',
    items: [
      {
        label: t('Exchange'),
        href: '/swap',
      },
      {
        label: t('Liquidity'),
        href: '/liquidity',
      },
      // {
      //   label: t('LP Migration'),
      //   href: 'https://v1exchange.pancakeswap.finance/#/migrate',
      // },
    ],
  },
  {
    label: t('Farms'),
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: t('Staking'),
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: t('Bonds'),
    icon: 'IfoIcon',
    href: 'https://app.liqdex.io',
  },
  // {
  //   label: t('Referral'),
  //   icon: 'GroupsIcon',
  //   href: '/referral',
  // },
  // {
  //   label: t('Lottery (soon)'),
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  {
    label: t('Join'),
    icon: 'TeamBattleIcon',
    items: [
      {
        label: 'Telegram',
        href: 'https://t.me/liqdex_social',
      },
      {
        label: 'Twitter',
        href: 'https://twitter.com/liqdex_social',
      },
    ]
  },
  
  {
    label: t('Charts'),
    icon: 'InfoIcon',
    items: [
      {
        label: 'Dextools',
        href: 'https://www.dextools.io/app/bsc/pair-explorer/0xeacCD96a9Af75364583D16cE32c8124eC6DE6a9d',
      },
      {
        label: 'Poocoin',
        href: 'https://poocoin.app/tokens/0x69156723db94f1278e709Fd1025b51cdD5162234',
      },
    ]
  },
  {
    label: t('More'),
    icon: 'MoreIcon',
    items: [
      {
        label: 'Doc',
        href: 'https://dex.liqdex.io/Whitepapers.pdf',
      },
      {
        label: 'Github',
        href: 'https://github.com/liqdex',
      },
    ]
  },
]

export default config
