import Avatar from '../../components/atoms/Avatar';
import profile from '../mock/profile.json';
import { render } from '../utils/render';
import { cleanup, screen } from '@testing-library/react';

afterEach(cleanup);

test('verify if component receives the `src` prop correctly', () => {
  render(<Avatar src={profile.avatar_url} />);

  const avatar = screen.getByTestId(/^avatar_\d/);

  expect(avatar).toBeInTheDocument();
  expect(avatar).toHaveStyle(`background-image: url(${profile.avatar_url})`);
});
