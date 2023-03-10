import { render, screen, cleanup } from '@testing-library/react';
import GridCell from '../../../components/UI/atoms/GridCell';
import { GridCellProps } from '../../../components/UI/atoms/GridCell/types';

afterEach(cleanup);

test('verify if component receives the `children` correctly', () => {
  const currentDataTestId = "grid-cell__rtl";
  const expectedText = "Teste com RTL";
  const props: GridCellProps = {
    bgImg: {
      source: "../assets/tile.png",
      size: "cover"
    },
    area: [2, 1, 2, 4]
  };

  render(<GridCell 
    dataTestId={currentDataTestId}
    bgImg={props.bgImg}
    area={props.area}
  >{expectedText}</GridCell>);

  const cardDesc = screen.getByTestId(currentDataTestId);

  expect(cardDesc).toBeInTheDocument();
  expect(cardDesc).toHaveTextContent(expectedText);
  expect(cardDesc)
    .toHaveStyle(`background-image: url(${props.bgImg!.source})`);
  expect(cardDesc)
    .toHaveStyle(`background-size: ${props.bgImg!.size}`);
  expect(cardDesc)
    .toHaveStyle(`grid-area: ${props.area!.join(" / ")}`);
});