import { render, screen, cleanup } from '@testing-library/react';
import Card from '../../components/UI/molecules/Card';
import { CardProps } from '../../components/UI/molecules/Card/types';
import repos from '../mock/repos.json';

afterEach(cleanup);

test('verify if component receives child components and `content` prop correctly', () => {
  const currentDataTestId = "card_rtl";
  const props: CardProps = {
    bgImg: `https://raw.githubusercontent.com/mjgargani/${repos[0].name}/main/thumbnail.gif`,
    title: "Teste RTL",
    content: false,
    url: repos[0].url
  }
  const expectedText = "Descrição do card";

  render(<Card 
    dataTestId={currentDataTestId} 
    bgImg={props.bgImg}
    title={props.title}
    content={props.content}
    url={props.url}
  >Descrição do card</Card>);

  const card = screen.getByTestId(currentDataTestId);
  const cardThumb = screen.getByTestId(/^card-thumb_\d+/);
  const cardTitle = screen.getByTestId(/^card-title_\d+/);
  const cardDescription = screen.getByTestId(/^card-desc_\d+/);

  expect(card).toBeInTheDocument();
  expect(cardThumb).toBeInTheDocument();
  expect(cardTitle).toBeInTheDocument();
  expect(cardDescription).toBeInTheDocument();

  expect(cardThumb)
    .toHaveStyle(`background-image: url(${props.bgImg})`);
  expect(card).toHaveTextContent(props.title!);
  expect(card).toHaveTextContent(expectedText);
  expect(screen.getByTestId(currentDataTestId))
    .toHaveStyle(`opacity: 0.85`);
  expect(screen.getByText(expectedText).closest('a'))
    .toHaveAttribute('href', props.url);
});
