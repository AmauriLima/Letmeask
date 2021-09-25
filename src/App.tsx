import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './assets/styles/global';
import defaultTheme from './assets/styles/themes/default';
import { AuthProvider } from './Context/AuthContext';
import { Routes } from './Routes';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyles />
          <Routes />
        </ThemeProvider>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
