import TextInput  from '../../components/TextInput'
import Button from '../../components/Button'
import { Wrapper } from './styles'
import SearchIcon from '../../assets/search.svg'
import { useState } from 'react'

const BuscadorCnj = () => {
  const [value, setValue] = useState<string>('')

  return (
    <Wrapper>
      <TextInput 
        value={value} 
        onChange={(e) => setValue(e.target.value)}
        placeholder={'CNJ do processo'}
        required={true}
      />
      <Button icon={SearchIcon} disabled={!value}>Buscar</Button>
    </Wrapper>
  )
}

export default BuscadorCnj