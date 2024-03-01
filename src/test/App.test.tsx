import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import App from '../App.tsx';
import { render, screen } from '@testing-library/react';
describe('1. 시작 페이지 확인', () => {
  it('1. 스타트 페이지 확인', async () => {
    const history = createMemoryHistory({ initialEntries: ['/'] });

    render(
      <Router location={history.location} navigator={history}>
        <App />
      </Router>,
    );

    expect(await screen.findByText(/스타트/)).toBeInTheDocument();
  });
});
