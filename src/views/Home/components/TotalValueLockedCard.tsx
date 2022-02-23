import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Skeleton, Text } from '@pancakeswap/uikit'
import { useTotalValue } from 'state/farms/hooks'
// import { useGetStats } from 'hooks/api'
import { useTranslation } from 'contexts/Localization'

const StyledTotalValueLockedCard = styled(Card)`
  align-items: center;
  display: flex;
  flex: 1;
  min-height: 260px;
`

const CustomCardBody = styled(CardBody)`
  min-height:255px;
`;

const TotalValueLockedCard = () => {
  const { t } = useTranslation()
  const tvl = useTotalValue()
  // const tvl = data ? data.total_value_locked_all.toLocaleString('en-US', { maximumFractionDigits: 0 }) : null

  return (
    <StyledTotalValueLockedCard>
      <CustomCardBody>
        <Heading size="lg" mb="24px" color="#fff">
          {t('Total Value Locked (TVL)')}
        </Heading>
        {tvl ? (
          <>
            <Text bold color="#fff" fontSize="54px" mb="20px">${tvl.toFixed(2)}</Text>
            <Text bold color="#fff">{t('Across all Farms and Pools')}</Text>
          </>
        ) : (
          <Skeleton height={66} />
        )}
      </CustomCardBody>
    </StyledTotalValueLockedCard>
  )
}

export default TotalValueLockedCard
