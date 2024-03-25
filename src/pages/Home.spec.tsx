import { vi, beforeEach, afterEach, describe, test, expect } from 'vitest'
import { mockedCryptoListResponse } from '../mocks/cryptoListResponse';
import { renderWithProviders } from '../utils/test-utils/test-utils';
import Home from './Home';
import { screen } from '@testing-library/react';
import { waitFor } from '@testing-library/react';
import requestCryptoList from '../api/coingecko/cryptoList';
describe(('Home page test'), () => {
  beforeEach(() => {
    vi.mock('react-router-dom', () => ({
      useNavigate: vi.fn()
    }))
    vi.mock('../api/coingecko/cryptoList')
    vi.mocked(requestCryptoList).mockReturnValue(Promise.resolve(mockedCryptoListResponse))
  })
  afterEach(() => {
    vi.restoreAllMocks()
  })
  test('Renders Home page without crashing', () => {
    renderWithProviders(<Home />)

  })
  test('Renders async elements - coins and its prices', async () => {
    await waitFor(() => {
      const { getByText } = renderWithProviders(<Home />)
      expect(getByText(/bitcoin/i))
      expect(getByText(/65,767/))
      expect(getByText(/ethereum/i))
      expect(getByText(/3,514.61/))
    }, { timeout: 3000 });
  })
})