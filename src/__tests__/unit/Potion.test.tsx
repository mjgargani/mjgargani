import potionImg from '../../assets/potion.webp';
import Potion from '../../components/atoms/Potion';
import { type PageEndPoints } from '../../globals';
import potionStyles from '../../styles/defaults/potion';
import { render } from '../utils/render';
import { cleanup, screen, waitFor } from '@testing-library/react';

afterEach(cleanup);

test.each([
  [false, '/'],
  [true, '/projects'],
])(
  'verify if component receives the `transparent` prop correctly (transparent: %p, page: %p)',
  async (transparent, page) => {
    console.warn(import.meta.env.MODE);

    render(<Potion src={potionImg} transparent={transparent} />);

    const potion = await screen.findByTestId(/^potion_\d/);

    expect(potion).toBeInTheDocument();
    expect(potion).toHaveStyle(`opacity: ${potionStyles[page as PageEndPoints].opacity}`);
  },
);
