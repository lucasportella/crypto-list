import { render } from '@testing-library/react';
import Chart from './LineChart';
import { test, describe } from 'vitest';

const mockPriceData = {
  cryptoVariation: {
    prices: [
      [1635494400, 60000],
      [1635580800, 62000],

    ],
    market_caps: [
      [1635494400, 60000],
      [1635580800, 62000],

    ],
    total_volumes: [
      [1635494400, 60000],
      [1635580800, 62000],

    ],
  },
};

describe('Chart Component', () => {
  test('renders without crashing', () => {
    render(<Chart cryptoVariation={mockPriceData.cryptoVariation} />);
  });
});
