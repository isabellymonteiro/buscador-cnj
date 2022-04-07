import { NotFound, Loading, Wrapper } from './styles'
import { useEffect, useState } from 'react'
import { getProcInfo } from '../../services/api'
import { Link, useParams } from 'react-router-dom'
import ReturnIcon from '../../assets/return.svg'
import Button from '../../components/Button'
import LoadingIcon from '../../assets/loading.svg'

const Processo = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<any>([])

  const { procNum } = useParams<{ procNum: string }>()

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProcInfo(procNum)
      setData(data)
      setLoading(false)
      //console.log(data)
    }
    fetchData()
  }, [procNum])

  return (
    <>
        {loading ? (
          <Loading>
            <img src={LoadingIcon} alt='Carregando' />
            <p>Carregando...</p>
          </Loading>
        ) : (!!data.status_op ? (
        <NotFound>
          <Link to={'/'} style={{ textDecoration: 'none'}}>
            <Button 
              icon={ReturnIcon}
              color={'#fff'}
              aria-label={'Voltar'}
            />
          </Link>
          {data.status_op}.
        </NotFound>
      ) : (
        <Wrapper>
          <p>Dados do processo</p>
        </Wrapper>
      )
    )}
    </>
  )
}

export default Processo