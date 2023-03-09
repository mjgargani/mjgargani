import { render, screen, cleanup } from '@testing-library/react';
import Avatar from '../../../components/UI/atoms/Avatar';
import profile from '../../mock/profile.json';

afterEach(cleanup);

test('renders learn react link', () => {
  render(<Avatar src={profile.avatar_url}/>);

  expect(screen.getByTestId("about__avatar")).toBeInTheDocument();
  expect(screen.getByTestId("about__avatar"))
    .toHaveStyle(`background-image: url(${profile.avatar_url})`);
});
