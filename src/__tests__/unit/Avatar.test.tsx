import { render, screen, cleanup } from '@testing-library/react';
import Avatar from '../../components/UI/atoms/Avatar';
import profile from '../mock/profile.json';

afterEach(cleanup);

test('verify if component receives the `src` prop correctly', () => {
  const currentDataTestId = "avatar__rtl";

  render(<Avatar dataTestId={currentDataTestId} src={profile.avatar_url}/>);

  expect(screen.getByTestId(currentDataTestId)).toBeInTheDocument();
  expect(screen.getByTestId(currentDataTestId))
    .toHaveStyle(`background-image: url(${profile.avatar_url})`);
});
