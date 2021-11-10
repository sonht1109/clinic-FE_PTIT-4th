import { GlobalStyle } from 'styles/global-styles';
import { ThemeProvider } from 'styled-components';
// css style configs
import theme from 'styles/theme';
import 'styles/fonts.css'; // import config font define
import 'sweetalert2/dist/sweetalert2.min.css';
import 'react-day-picker/lib/style.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BaseCSS } from 'styled-bootstrap-grid';

// diff import
import Loading from 'components/Loading';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { selectAppStore } from './store/selecters';
import LanguageProvider from './LanguageProvider';
import Login from 'containers/Login';
import LayoutWrapper from 'containers/Layout/LayoutWrapper';
import NotFoundPage from 'components/NotFoundPage';
import Demo from 'containers/Demo';

function App() {
  const { loading } = useSelector(selectAppStore);
console.log("hellllllo");

  return (
    <LanguageProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path="/login">
              <Login />
            </Route>
            <LayoutWrapper />
            <Route exact path="/demo">
              <Demo />
            </Route>
            <Route path="*">
              <NotFoundPage />
            </Route>
          </Switch>
        </Router>
        <Loading active={loading} />
        <GlobalStyle />
        <BaseCSS />
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
