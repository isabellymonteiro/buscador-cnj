const baseUrl = 'https://op.digesto.com.br'
const token = '5af8ba4c-43e3-4361-9e9c-f73458ab6a5b'

export const getProcInfo = async (procNum: string) => {
  try {
    const endpoint = `${baseUrl}/api/tribproc/${procNum}?tipo_numero=8&api_key=${token}`
    const response = await fetch(endpoint)
    const data = await response.json()
    return data
  } catch (err) {
    return null
  }
}
