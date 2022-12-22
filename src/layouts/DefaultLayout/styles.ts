import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 118.4rem;
  height: 65rem;
  margin: 16rem auto;
  padding: 3.5rem;

  background: ${(props) => props.theme['gray-800']};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
`
