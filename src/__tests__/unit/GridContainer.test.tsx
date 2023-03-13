import { render, screen, cleanup } from '@testing-library/react';
import GridContainer from '../../components/UI/atoms/GridContainer';
import { GridContainerProps } from '../../components/UI/atoms/GridContainer/types';

afterEach(cleanup);

test('verify if component receives the props and `children` correctly', () => {
  const currentDataTestId = "grid-ceontainer__rtl";
  const expectedText = "Teste com RTL";
  const props: GridContainerProps = {
    templateColumns: { mobile: ["repeat(2,1fr)"] },
    templateRows: { mobile: ["repeat(3,1fr)"] },
  };

  render(<GridContainer 
    dataTestId={currentDataTestId}
    templateColumns={props.templateColumns}
    templateRows={props.templateRows}
  >{expectedText}</GridContainer>);

  const cardDesc = screen.getByTestId(currentDataTestId);

  expect(cardDesc).toBeInTheDocument();
  expect(cardDesc).toHaveTextContent(expectedText);
  expect(cardDesc)
    .toHaveStyle(`grid-template-columns: ${props.templateColumns?.mobile}`);
  expect(cardDesc)
    .toHaveStyle(`grid-template-rows: ${props.templateRows?.mobile}`);
});