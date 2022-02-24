import React from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap/uikit'
import styled from 'styled-components'
import { getBalanceNumber, formatLocalisedCompactNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance, useDeployerBalance } from 'hooks/useTokenBalance'
import { usePriceCakeBusd, useFarmFromPid } from 'state/farms/hooks'
import { getCakeAddress } from 'utils/addressHelpers'
import { useTranslation } from 'contexts/Localization'
import CardValue from './CardValue'

const StyledCakeStats = styled(Card)`
  // margin-left: auto;
  // margin-right: auto;
  min-height: 260px;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 16px;
  font-weight: bold;
  justify-content: space-between;
  margin-bottom: 8px;
  color: #fff;
`

const CakeStats = () => {
  const { t } = useTranslation()
  const totalSupply = useTotalSupply()
  const burnedBalance = getBalanceNumber(useBurnedBalance(getCakeAddress()), 9)
  const deployerBalance = getBalanceNumber(useDeployerBalance(getCakeAddress()), 9)
  const cakeSupply = totalSupply ? getBalanceNumber(totalSupply, 9) - burnedBalance - deployerBalance : 0
  const liqdPriceBusd = usePriceCakeBusd()
  const mcap = liqdPriceBusd.times(cakeSupply)

  // const fetchFarm = async () => {
  //   const [totalAllocPoint, liqdPerBlock] = await multicall(masterchefABI, [
  //         {
  //           address: getMasterChefAddress(),
  //           name: 'totalAllocPoint',
  //         },
  //         {
  //           address: getMasterChefAddress(),
  //           name: 'liqdPerBlock',
  //         },
  //       ])  
  // } 
  const farm = useFarmFromPid(0)

  return (
    <StyledCakeStats>
      <CardBody>
        <Heading size="xl" mb="20px" color="#fff">
          {t('LIQD Stats')}
        </Heading>
        <Row>
          <Text bold color="#fff" fontSize="16px">{t('Total Supply')}</Text>
          {getBalanceNumber(totalSupply, 9) && <CardValue color="#fff"  fontSize="16px" value={getBalanceNumber(totalSupply, 9)} />}
        </Row>
        <Row>
          <Text bold color="#fff" fontSize="16px">{t('Total Burned')}</Text>
          <CardValue color="#fff "  fontSize="16px" decimals={0} value={burnedBalance} />
        </Row>
        <Row>
          <Text bold color="#fff" fontSize="16px">{t('Circulating Supply')}</Text>
          {cakeSupply && <CardValue color="#fff" fontSize="16px" decimals={0} value={cakeSupply} />}
        </Row>
        <Row>
          <Text bold color="#fff" fontSize="16px">{t('Market Cap')}</Text>
          <CardValue color="#fff "  fontSize="16px" decimals={6} value={mcap.toNumber()} />
        </Row>
        <Row>
          <Text bold color="#fff" fontSize="16px">{t('Rewards LIQD/block')}</Text>
          <CardValue color="#fff"  fontSize="16px" decimals={2} value={Number(farm.liqdPerBlock)} />
        </Row>
      </CardBody>
    </StyledCakeStats>
  )
}

export default CakeStats
