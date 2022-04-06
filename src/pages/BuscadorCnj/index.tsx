import TextInput  from '../../components/TextInput'
import Button from '../../components/Button'
import { Wrapper } from './styles'
import SearchIcon from '../../assets/search.svg'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const BuscadorCnj = () => {
  const [procNum, setProcNum] = useState<string>('')
  
  return (
    <Wrapper>
      <TextInput 
        value={procNum} 
        onChange={(e) => setProcNum(e.target.value)}
        placeholder={'CNJ do processo'}
        required={true}
      />
      <Link to={`/proc/${procNum}`} style={{ textDecoration: 'none'}}>
        <Button 
          icon={SearchIcon} 
          disabled={!procNum}
          aria-label='Buscar'>
          Buscar
        </Button>
      </Link>
    </Wrapper>
  )
}

export default BuscadorCnj