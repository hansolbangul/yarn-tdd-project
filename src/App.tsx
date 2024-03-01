import './App.css';
import { ProjectRoute } from './pages/ProjectRoute.tsx';
import { GlobalTheme } from './GlobalTheme.tsx';

const App = () => {
  return (
    <>
      <GlobalTheme />
      <ProjectRoute />
    </>
  );
};

export default App;
