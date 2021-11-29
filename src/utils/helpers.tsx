import { ethers } from "ethers"

const firstFew = (address: string) => {
  return address.substring(0, 6)
}

const lastFew = (address: string) => {
  return address.slice(-6)
}

export const short = (input: string) => {
  return `${firstFew(input)}...${lastFew(input)}`
}

export const getBalanceNumber = (amount: ethers.BigNumber, decimals = 18) => {
  return ethers.BigNumber.from(amount).div((ethers.BigNumber.from(10)).pow(decimals)).toNumber()
}

export const getBalanceString = (amount: ethers.BigNumber) => {
  return ethers.utils.formatEther(amount)
}

export const timeConverter = (timestamp: number) => {
  const a = new Date(timestamp * 1000)
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
  const year = a.getFullYear()
  const month = months[a.getMonth()]
  const date = a.getDate()
  const hour = a.getHours()
  const min = a.getMinutes()
  return month + ' ' + date + ' - ' + year + ' | ' + hour + ':' + min
}