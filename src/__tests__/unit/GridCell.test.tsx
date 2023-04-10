import GridCell from '../../components/atoms/GridCell';
import { type GridCellProps } from '../../components/atoms/GridCell/types';
import { render } from '../utils/render';
import { cleanup, screen } from '@testing-library/react';

afterEach(cleanup);

test('verify if component receives the props and `children` correctly', () => {
  const currentDataTestId = 'grid-cell__rtl';
  const expectedText = 'Teste com RTL';
  const props: GridCellProps = {
    bgImg: {
      source: '../assets/tile.webp',
      size: 'cover',
    },
  };

  render(
    <GridCell dataTestId={currentDataTestId} bgImg={props.bgImg}>
      {expectedText}
    </GridCell>,
  );

  const cardDesc = screen.getByTestId(currentDataTestId);

  expect(cardDesc).toBeInTheDocument();
  expect(cardDesc).toHaveTextContent(expectedText);
  expect(cardDesc).toHaveStyle(`background-image: url(${props.bgImg!.source!})`);
  expect(cardDesc).toHaveStyle(`background-size: ${props.bgImg!.size!}`);
});
