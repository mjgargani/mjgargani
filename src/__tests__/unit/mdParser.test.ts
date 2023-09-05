import mdParser from '../../utils/mdParser';
import repos from '../mock/repos.json';
import { cleanup, render, screen } from '@testing-library/react';

test('verify if util works correctly', async () => {
  cleanup();
  const resultA = mdParser(repos[0].description) as JSX.Element;
  render(resultA);
  expect(screen.getByText(/Teste de percepção de cores/)).toContainHTML('<code>ReactJS</code>');

  cleanup();
  const resultB = mdParser(repos[0].description, ['<code>ReactJS</code>']) as JSX.Element;
  render(resultB);
  expect(screen.getByText(/Teste de percepção de cores/)).not.toContainHTML('<code>ReactJS</code>');

  cleanup();
  const resultC = mdParser('');
  expect(resultC).toBe(false);
});
