/* eslint-disable camelcase */
import React from 'react'
import styled from 'styled-components'
import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  width: 80%;
  background-color: #131318;
  border-radius: 20px;
  padding: 32px;
  margin-top: 80px;
  position: relative;
`

const StyledCard = styled.div`
  display: flex;
  border-radius: 20px;
  background-color: #161326;
  border: 1px solid #595da1;
  color: #7d8fd1;
  padding: 10px;
`

const EmptyInfo = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  top: 0;
  z-index: 1000;
  position: absolute;
  align-items: center;
  justify-content: center;
`

const SpanHeader = styled.span`
  margin-top: 14px;
  font-size: 16px;
  font-weight: bold;
`
const SpanMain = styled.span`
  font-size: 12px;
  color: #7d8fd1;
`

interface Props {
  volume: any
}

const ChartCard: React.FC<Props> = ({
  volume,
}) => {

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && label) {
      return (
        <StyledCard>
          <SpanHeader>{label}</SpanHeader>
          <SpanMain>{`Volume: ${payload[0].payload.volume}`}</SpanMain>
        </StyledCard>
      )
    }
    return null
  }

  const noChartData = !volume.length

  return (
    <ChartContainer>
      <SpanHeader>
        Total Volume Since Page Load
      </SpanHeader>
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart data={volume} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          <Area type="monotone" dataKey="volume" stroke='#0098A1' fill="#6562a1" />
          <CartesianGrid stroke='#BDC2C4' strokeDasharray="5 5" opacity="0.4" />
          <XAxis dataKey="time" stroke='#919191' fontSize="12px" />
          <YAxis stroke='#919191' fontSize="12px" />
          <Tooltip content={<CustomTooltip />} />
        </AreaChart>
      </ResponsiveContainer>
      {noChartData && (
        <EmptyInfo>
          <SpanHeader >
            No sales yet
          </SpanHeader>
        </EmptyInfo>
      )}
    </ChartContainer>
  )
}

export default ChartCard
