import React from 'react'
import styled from 'styled-components'

import HomeBackground from '../../assets/images/home-background.png'

const StylePageTitle = styled.div`
  background-image: url(${HomeBackground});
  background-repeat: no-repeat;
  background-position: top center;
  min-height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Text = styled.div`
  margin-top: 50px;
`

const Title = styled.div`
  color: #E3507A;
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 15px;
`
const Subtitle = styled.div`
  color: #DADADA;
  font-size: 12px;
  font-weight: 400;
`


export default function PageTitle() {
  return (
    <StylePageTitle>
      <Text>
        <Title>CremePie Swap</Title>
        <Subtitle>The #1 AMM and yield farm on Binance Smart Chain.</Subtitle>
      </Text>
    </StylePageTitle>
  )
}