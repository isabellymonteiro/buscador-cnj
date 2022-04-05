import styled from 'styled-components'

interface Props {
  backgroundColor?: string
  disabled?: boolean
}

export const ButtonContainer = styled.button<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f9f9f9;
  background: ${(props) => (props.backgroundColor ? props.backgroundColor : '#980404')};
  opacity: ${(props) => (props.disabled ? '0.7' : '1')};
  font-size: clamp(16px, 3vw, 20px);
  font-weight: 500;
  padding: 12px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  border: 0;
  border-radius: 4px;

  :hover {
    opacity: 0.7;
  }

  img {
    margin-right: 8px;
  }
`