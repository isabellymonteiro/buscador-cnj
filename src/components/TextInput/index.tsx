import { ChangeEventHandler } from 'react'
import { InputContainer } from './styles'

interface Props {
  value: string
  onChange: ChangeEventHandler<HTMLInputElement>
  placeholder?: string
  required?: boolean
}

const textInput = ({
  value,
  onChange,
  placeholder,
  required,
}: Props) => {
  return (
    <div>
      <InputContainer 
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
    </div>
  )
}

export default textInput