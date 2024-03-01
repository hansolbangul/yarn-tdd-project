import { Route, Routes } from 'react-router-dom';
import StartPage from './StartPage.tsx';

export const ProjectRoute = () => {
  return (
    <Routes>
      <Route path={'/'} element={<StartPage />} />
    </Routes>
  );
};
