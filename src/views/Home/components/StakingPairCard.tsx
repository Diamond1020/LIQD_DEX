import React, {useState, useRef, useCallback, useEffect} from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Flex, ArrowForwardIcon, Text, Button } from '@pancakeswap/uikit'
import useGetTopPoolsByApr from 'views/Home/hooks/useGetTopPoolsByApr'
import { useTranslation } from 'contexts/Localization'
import CardValue from './CardValue'

const StyledFarmStakingCard = styled(Card)`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  margin: 15px 0 0 0;

  ${({ theme }) => theme.mediaQueries.lg} {
    max-width: none;
  }
`

const AllApr = styled(Button)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 5px;
  padding: 0;
  background-color: transparent;
  box-shadow: 0px 0px 0px 0px rgb(14 14 44 / 40%) inset;
`

const WinCard = () => {
  const [showFarms, setShowFarms] = useState(false)
  const { topPools } = useGetTopPoolsByApr(true)
  const { t } = useTranslation()

  const timer = useRef<ReturnType<typeof setTimeout>>(null)
  const isLoaded = topPools[0]

  const startTimer = useCallback(() => {
    timer.current = setInterval(() => {
      setShowFarms((prev) => !prev)
    }, 6000)
  }, [timer])

  useEffect(() => {
    if (isLoaded) {
      startTimer()
    }

    return () => {
      clearInterval(timer.current)
    }
  }, [timer, isLoaded, startTimer])

  return (
    <StyledFarmStakingCard>
      <CardBody>
        <Heading color="#fff" size="sm" paddingBottom="10px">
          Earn Up TO
        </Heading>

        <CardValue color="text"  fontSize="24px" surfix="%" decimals={2} value={topPools[0]?topPools[0].apr:0} />
        {/* <Text color="textSubtle">{topPools[0]?topPools[0].apr:0} %</Text> */}
        <AllApr as="a" href="/#/pools">
          <Text color="#fff">APR in Pools</Text>
          <Text color="#fff">&gt;&gt;&gt;</Text>
        </AllApr>
      </CardBody>
    </StyledFarmStakingCard>
  )
}

export default WinCard
