import { Route, Switch } from 'react-router-dom';
import Layout from './components/layout/Layout';

import BioPage from './pages/Bio';
import ResumePage from './pages/Resume';
import WorkPage from './pages/Work';
import ContactPage from './pages/Contact';

import { Helmet } from "react-helmet";

function App() {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Elijah's Portfolio</title>
        <link rel="icon" href="favicon.png" />
        <link rel="canonical" href="https://elijahromer.herokuapp.com/" />
        <meta name="description" content="Elijahs Portfolio" />
        <script
          src="https://kit.fontawesome.com/3e60e776d3.js"
          crossorigin="anonymous"
        ></script>

      </Helmet>
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
