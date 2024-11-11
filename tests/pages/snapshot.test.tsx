import { render } from '@testing-library/react'
import HomePage from '@/app/page'
import { NextIntlClientProvider } from 'next-intl'
import { ReactQueryProvider } from '@/context/ReactQueryProvider'
import { Provider } from 'react-redux'
import store from '../../store'
import { useQuery } from '@tanstack/react-query'

// Mock the useQuery hook
jest.mock('@tanstack/react-query', () => ({
  useQuery: jest.fn(),
}))

const messages = { HomePage: { title: 'Home Page' } }

function renderWithProviders(ui: React.ReactElement) {
  return render(
    <Provider store={store}>
      <ReactQueryProvider>
        <NextIntlClientProvider locale="en" messages={messages}>
          {ui}
        </NextIntlClientProvider>
      </ReactQueryProvider>
    </Provider>
  )
}

it('renders homepage unchanged', () => {
  // Mock the data returned by useQuery
  (useQuery as jest.Mock).mockReturnValue({
    data: { example: 'data' },
    isLoading: false,
    error: null,
  })

  const { container } = renderWithProviders(<HomePage />)
  expect(container).toMatchSnapshot()
})