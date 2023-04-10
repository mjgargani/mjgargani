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
])('verify if component receives the `transparent` prop correctly (value: %p)', async (transparent, page) => {
  console.warn(import.meta.env.MODE);

  render(<Potion src={potionImg} transparent={transparent} />);

  await waitFor(
    async () => {
      await expect(screen.findByTestId(/^potion_\d/)).resolves.toBeInTheDocument();
    },
    { timeout: 10000 },
  );

  // Await expect(potion).resolves.toBeInTheDocument();
  // Expect(potion).toHaveStyle(`opacity: ${potionStyles[page as PageEndPoints].opacity}`);
});
