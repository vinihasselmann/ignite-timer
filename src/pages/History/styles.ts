import styled from 'styled-components'

export const HistoryContainer = styled.main`
  flex: 1;

  padding: 5.7rem;
  display: flex;
  flex-direction: column;

  height: 100%;

  h1 {
    font-size: 2.4rem;
    color: ${(props) => props.theme['gray-100']};
  }
`

export const HistoryList = styled.div`
  flex: 1;
  overflow: auto;
  margin-top: 3.25rem;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 60rem;

    th {
      background-color: ${(props) => props.theme['gray-600']};
      padding: 1.6rem;
      text-align: left;
      color: ${(props) => props.theme['gray-100']};
      font-size: 1.4rem;
      line-height: 1.6;

      &:first-child {
        border-top-left-radius: 0.8rem;
        padding-left: 2rem;
      }
      &:last-child {
        border-top-right-radius: 0.8rem;
        padding-left: 2rem;
      }
    }

    td {
      background-color: ${(props) => props.theme['gray-700']};
      border-top: 0.4rem solid ${(props) => props.theme['gray-800']};
      padding: 1.6rem;
      font-size: 1.2rem;
      line-height: 1.6;

      &:first-child {
        width: 50%;
        padding-left: 2rem;
      }
      &:last-child {
        padding-left: 2rem;
      }
    }
  }
`

const STATUS_COLORS = {
  yellow: 'yellow-500',
  green: 'green-500',
  red: 'red-500',
} as const

interface StatusProps {
  statusColor: keyof typeof STATUS_COLORS
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  &::before {
    content: '';
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    background-color: ${(props) =>
      props.theme[STATUS_COLORS[props.statusColor]]};
  }
`
