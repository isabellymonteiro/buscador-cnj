import { FormEvent } from "react"

export const cnj = (e: FormEvent<HTMLInputElement>) => {
  e.currentTarget.maxLength = 20
  let value = e.currentTarget.value
  value = value.replace(/\D/g, '')
  value = value.replace(/^(\d{7})(\d{2})(\d{4})(\d{1})(\d{2})(\d{4})/, '$1-$2.$3.$4.$5.$6')
  e.currentTarget.value = value
  return e
}
