import { render, screen , fireEvent} from '@testing-library/react'
import SearchIcon from '../../assets/search.svg'
import Button from '../Button'
import userEvent from '@testing-library/user-event'
import TextInput from '../TextInput'

const mockOnChange = jest.fn()

describe('BuscadorCnj', () => {
  test('on initial render, the search button is disabled', () => {
    render(<Button icon={SearchIcon} disabled={true}>Buscar</Button>)

    expect(screen.getByRole('button', {name: /buscar/i})).toBeDisabled
  })

  test('if text is entered, the search button becomes enabled', () => {
    render(<Button icon={SearchIcon} disabled={true}>Buscar</Button>)
    render(<TextInput value='' onChange={mockOnChange} />)

    const textInput = screen.getByDisplayValue('')
    const button = screen.getByRole('button', {name: /buscar/i})

    fireEvent.change(textInput, { target: { value: '345' } })
    expect(button).toBeEnabled
  })
})