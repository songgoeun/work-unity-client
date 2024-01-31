import { ThemeProvider } from 'styled-components';
// import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <Loading isLoading={loading} /> */}
      <Outlet />
      {/* <Suspense fallback={<div>test</div>}>
        
      </Suspense> */}
    </ThemeProvider>
  );
}

export default App;
