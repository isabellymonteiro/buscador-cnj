const baseUrl = 'https://op.digesto.com.br'
const token = '2a13ae70-a928-4fc8-ad08-91132322a603'

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
