import { MouseEventHandler } from 'react'
import { ButtonContainer } from './styles'

interface Props {
  icon: string
  ariaLabel?: string
  children?: React.ReactNode
  color?: string
  disabled?: boolean
  onClick?: MouseEventHandler
  alt?: string
}

const Button = ({
  icon,
  ariaLabel,
  children, 
  color, 
  disabled,
  onClick,
  alt
}: Props ) => {
  return (
      <ButtonContainer
        onClick={onClick}
        backgroundColor={color}
        disabled={disabled}
        aria-label={ariaLabel}
      >
        <img src={icon} alt={alt}/>
        {children}
      </ButtonContainer>
  )
}

export default Button