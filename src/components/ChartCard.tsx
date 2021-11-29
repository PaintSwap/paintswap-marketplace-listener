/* eslint-disable camelcase */
import React from 'react'
import styled from 'styled-components'
import { Area, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, ComposedChart, Line, Legend } from 'recharts'

const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #131318;
  border-radius: 20px;
  padding: 16px;
  margin-top: 60px;
  position: relative;
`

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
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
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 8px;
`
const SpanMain = styled.span`
  font-size: 12px;
  color: #7d8fd1;
  margin-bottom: 4px;
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
          <SpanMain>{`NFT ID: ${payload[0].payload.id}`}</SpanMain>
          <SpanMain>{`NFT Price: ${payload[0].payload.price}`}</SpanMain>
          <SpanMain>{`Tot. Volume: ${payload[0].payload.volume}`}</SpanMain>
        </StyledCard>
      )
    }
    return null
  }

  const noChartData = !volume.length

  return (
    <ChartContainer>
      <SpanHeader>
        Volume Sold Since Page Load
      </SpanHeader>
      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart data={volume} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          <CartesianGrid stroke='#BDC2C4' strokeDasharray="5 5" opacity="0.4" />
          <XAxis dataKey="time" stroke='#919191' fontSize="12px" />
          <YAxis yAxisId="left" stroke='#919191' fontSize="12px" />
          <YAxis
                yAxisId="right"
                orientation="right"
                stroke='#919191'
                fontSize="12px"
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Area dataKey="volume" yAxisId="left" type="monotone" stroke='#0098A1' fill="#6562a1" />
          <Line dataKey="price" yAxisId="right" type="monotone"  stroke="#47CF73" />
        </ComposedChart>
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
