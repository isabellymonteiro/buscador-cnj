import { Link } from 'react-router-dom'
import { ButtonContainer } from './styles'

interface Props {
  icon: string
  ariaLabel?: string
  children?: React.ReactNode
  color?: string
  disabled?: boolean
  onClick?: (value?: any) => void
}

const Button = ({
  icon,
  ariaLabel,
  children, 
  color, 
  disabled,
  onClick
}: Props ) => {
  return (
      <ButtonContainer
        onClick={onClick}
        backgroundColor={color}
        disabled={disabled}
        aria-label={ariaLabel}
      >
        <img src={icon} />
        {children}
      </ButtonContainer>
  )
}

export default Button