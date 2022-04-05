import { ButtonContainer } from './styles'

interface Props {
  children: React.ReactNode
  color?: string
  icon: string
  disabled?: boolean
}

const Button = ({
  children, 
  color, 
  icon,
  disabled
}: Props ) => {
  return (
    <ButtonContainer 
      backgroundColor={color}
      disabled={disabled}
    >
      <img src={icon} alt='Lupa' />
      {children}
    </ButtonContainer>
  )
}

export default Button