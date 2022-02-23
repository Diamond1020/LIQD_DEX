import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'LIQD',
  description:
    'The most popular AMM on BSC by user count! Earn LIQD through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens on a platform you can trust.',
  image: 'https://LIQDSWAP.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('LIQDSWAP')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('LIQDSWAP')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('LIQDSWAP')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('LIQDSWAP')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('LIQDSWAP')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('LIQDSWAP')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('LIQDSWAP')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('LIQDSWAP')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('LIQDSWAP')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('LIQDSWAP')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('LIQDSWAP')}`,
      }
    default:
      return null
  }
}
