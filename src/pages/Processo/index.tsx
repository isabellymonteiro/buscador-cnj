import { InfoContainer, Loading, NotFound, ProcContainer, Wrapper } from './styles'
import { useEffect, useState } from 'react'
import { getProcInfo } from '../../services/api'
import { Link, useParams } from 'react-router-dom'
import ReturnIcon from '../../assets/return.svg'
import Button from '../../components/Button'
import LoadingIcon from '../../assets/loading.svg'
import CollapsibleTable from '../../components/Table'

const Processo = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<any>([])
  const [movData, setMovData] = useState<[]>([])
  const { procNum } = useParams<{ procNum: string }>()

  useEffect(() => {
    document.title = 'Digesto | Processo'
    const fetchData = async () => {
      const data = await getProcInfo(procNum)
      setData(data)
      setLoading(false)
      setMovData(data.movs)
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
          <ProcContainer>
            <div className='title'>
              <Link to={'/'} style={{ textDecoration: 'none'}}>
                <Button 
                  icon={ReturnIcon}
                  color={'#fff'}
                  aria-label={'Voltar'}
                />
              </Link>
              <h1>{data.tribunal} - Nº {data.numero}</h1>
            </div>
            <InfoContainer>
              <h2>Detalhes do Processo</h2>
              <div className='detalhes'>
                <div className='info-left'>
                  <p>{data.area} &nbsp; / &nbsp; {data.instancia}ª instância</p>
                  <p>{data.classeNatureza}</p>
                </div>
                <div className='info-right'>
                  <p>Comarca: &nbsp; {data.comarca}</p>
                  <p>Data da distribuição: &nbsp; {data.distribuicaoData} </p>
                </div>
              </div>  
              <h2>Partes envolvidas</h2>
              {data.partes?.map((parte: any[], index: number) => (
                <div key={index} className='partes'> 
                  <div className='info-left'>
                    {parte[8]}: &nbsp; {parte[2]} 
                  </div>
                  <div className='info-right'>Advogado(a): &nbsp; { 
                    (parte[9].length >= 1) ? (
                      parte[9]?.map((advogado: any[], index: number) => (
                        <span key={index}>{advogado[1]}<br/></span>
                      ))
                    ) : <span>—</span>
                  }
                  </div>
                  <div style={{ border: '1px solid #9B9B9B'}}></div>
                </div>      
              ))}
            </InfoContainer>
            <h2>Movimentações</h2>
            <CollapsibleTable data={movData} />
          </ProcContainer>
        </Wrapper>
      )
    )}
    </>
  )
}

export default Processo