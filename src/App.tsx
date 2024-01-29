import { ThemeProvider } from 'styled-components';
// import { RouterProvider } from 'react-router-dom';
import theme from './theme';
// antd - theme?

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <RouterProvider router={router} /> */}
    </ThemeProvider>
  );
}

export default App;
