import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'LIQD',
  description:
    'The most popular AMM on BSC by user count! Earn LIQD through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens on a platform you can trust.',
  image: 'https://dex.liqdex.io/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('LIQDEX')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('LIQDEX')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('LIQDEX')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('LIQDEX')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('LIQDEX')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('LIQDEX')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('LIQDEX')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('LIQDEX')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('LIQDEX')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('LIQDEX')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('LIQDEX')}`,
      }
    default:
      return null
  }
}
