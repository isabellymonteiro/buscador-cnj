import TextInput  from '../../components/TextInput'
import Button from '../../components/Button'
import { Wrapper } from './styles'
import SearchIcon from '../../assets/search.svg'
import { FormEvent, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { cnj } from '../../components/TextInput/masks'
import Toast from '../../components/Toast' 

const BuscadorCnj = () => {
  const [procNum, setProcNum] = useState<string>('')
  const [openToast, setOpenToast] = useState(false)
  
  const history = useHistory()

  const handleToastClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }
    setOpenToast(false);
  }

  const handleKeyUp = (e: FormEvent<HTMLInputElement>) => {
    cnj(e) 
  }

  const handleClick = (procNum: string) => {
    if ((procNum.replace(/-/, '').replace(/\./g, '').length) === 20) {
      history.push(`/proc/${procNum}`)
    } else {
      setOpenToast(true)
    }
  }

  return (
    <Wrapper>
      <TextInput 
        value={procNum} 
        onChange={(e) => setProcNum(e.target.value)}
        placeholder={'CNJ do processo'}
        required={true}
        onKeyUp={handleKeyUp}
        onPaste={(e) => setProcNum(e.clipboardData.getData('text'))}
        maxLength={20}
      />
      <Button 
        icon={SearchIcon} 
        disabled={!procNum}
        aria-label='Buscar'
        alt='Buscar'
        onClick={() => handleClick(procNum)}
      >
        Buscar
      </Button>
      {openToast &&
        <Toast
            open={openToast}
            onClose={handleToastClose}
            severity='error'
            message='CNJ inválido' 
        />
      }
    </Wrapper>
  )
}

export default BuscadorCnj