import { vi, beforeEach, afterEach, describe, test, expect } from 'vitest'
// import { requestCryptoList } from '../api/coingecko/cryptoList';
import { mockedCryptoListResponse } from '../mocks/cryptoListResponse';
import { renderWithProviders } from '../utils/test-utils/test-utils';
import Home from './Home';
import { screen } from '@testing-library/react';
import { waitFor } from '@testing-library/react';

describe(('Home page test'), () => {
  beforeEach(() => {
    vi.mock('react-router-dom', () => ({
      useNavigate: vi.fn()
    }))
    vi.mock('../api/coingecko/cryptoList', () => ({
      requestCryptoList: vi.fn().mockImplementation(async () => {
        return mockedCryptoListResponse
      }),
    }));
  })
  afterEach(() => {
    vi.restoreAllMocks()
  })
  test('Renders Home page without crashing', () => {
    const { getByText } = renderWithProviders(<Home />)
    expect(getByText(/connect/i))
    expect(getByText(/refresh list/i))

  })
  test('Renders async elements', async () => {
    await waitFor(() => {
      const { getAllByText } = renderWithProviders(<Home />)
      expect(getAllByText(/bitcoin/i))
      screen.debug(undefined, 99999999999)

    }, { timeout: 3000 });
  })
})