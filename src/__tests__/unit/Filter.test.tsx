import filters from '../mock/filters.json';
import { render } from '../utils/render';
import Filter from '@/components/atoms/Filter';
import { type FilterItem } from '@/components/atoms/Filter/types';
import { cleanup, screen, waitFor } from '@testing-library/react';

afterEach(cleanup);

const filtersMock: FilterItem[] = [...filters];

test('verify if component returns the children components correctly', async () => {
  const currentDataTestId = 'filter_rtl';

  render(<Filter filters={filtersMock} handleFilter={() => true} dataTestId={currentDataTestId} />);

  const filterInfo = screen.getByTestId(currentDataTestId);
  const inputCheckBoxes = screen.getAllByTestId(/^filter_check_\w+_\d+/);
  const inputLabels = screen.getAllByTestId(/^filter_label_\w+_\d+/);

  expect(filterInfo).toBeInTheDocument();
  expect(inputCheckBoxes).toHaveLength(13);
  expect(inputLabels).toHaveLength(13);

  await waitFor(() => {
    const isCheckedArray = Array.from(inputCheckBoxes.values()).map(el => (el as HTMLInputElement).checked);
    expect(isCheckedArray.some(el => !el)).not.toStrictEqual(true);
  });

  const inputLabelRest = inputLabels.filter((_,i) => i !== 0)
  
  for (const [i, el] of inputLabelRest.entries()) {
    const nameCondition = filtersMock[i].name === "archive" ? 
      `ARQUIVO (${filtersMock[i].recurrence})` :
      `${filtersMock[i].name.toUpperCase()} (${filtersMock[i].recurrence})`;
    expect(el).toHaveTextContent(nameCondition);
  }
});
