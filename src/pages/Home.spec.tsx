import { vi, beforeEach, afterEach, describe, test, expect } from 'vitest'
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
    // TODO: mock api
    // vi.mock('../api/coingecko/cryptoList', () => ({
    //   requestCryptoList: vi.fn().mockImplementation(async () => {
    //     return mockedCryptoListResponse
    //   }),
    // }));
  })
  afterEach(() => {
    vi.restoreAllMocks()
  })
  test('Renders Home page without crashing', () => {
    renderWithProviders(<Home />)

  })
  test('Renders async elements', async () => {
    await waitFor(() => {
      const { getAllByText } = renderWithProviders(<Home />)
      expect(getAllByText(/bitcoin/i))
      screen.debug(undefined, 99999999999)

    }, { timeout: 3000 });
  })
})