import { ChangeEventHandler, ClipboardEventHandler, KeyboardEventHandler } from 'react'
import { InputContainer } from './styles'

interface Props {
  value: string
  onChange?: ChangeEventHandler<HTMLInputElement>
  placeholder?: string
  required?: boolean
  onKeyUp?: KeyboardEventHandler<HTMLInputElement>
  onPaste?: ClipboardEventHandler<HTMLInputElement>
  maxLength?: number
}

const textInput = ({
  value,
  onChange,
  placeholder,
  required,
  onKeyUp,
  onPaste,
  maxLength
}: Props) => {
  return (
    <div>
      <InputContainer 
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        onKeyUp={onKeyUp}
        onPaste={onPaste}
        maxLength={maxLength}
      />
    </div>
  )
}

export default textInput