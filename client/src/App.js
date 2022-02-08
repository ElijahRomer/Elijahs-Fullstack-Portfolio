import { Route, Switch } from 'react-router-dom';
import Layout from './components/layout/Layout';

import BioPage from './pages/Bio';
import ResumePage from './pages/Resume';
import WorkPage from './pages/Work';
import ContactPage from './pages/Contact';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={BioPage} />
        <Route
          path="/resume"
          exact
          component={ResumePage}
        />
        <Route
          path="/work"
          exact
          component={WorkPage}
        />
        <Route
          path="/contact"
          exact
          component={ContactPage}
        />
      </Switch>
    </Layout>
  );
}

export default App;
