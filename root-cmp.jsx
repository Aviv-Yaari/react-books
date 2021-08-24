import { BookApp } from './pages/book-app.jsx';
import { BookDetails } from './pages/book-details.jsx';
import { Header } from './cmps/header.jsx';
import { About } from './pages/about.jsx';
import { HomePage } from './pages/home-page.jsx';
import { UserMsg } from './cmps/user-msg.jsx';
const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;

export const App = () => {
  return (
    <Router>
      <UserMsg />
      <Header />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/book/:bookId" component={BookDetails} />
        <Route path="/book" component={BookApp} />
        <Route path="/" component={HomePage} />
      </Switch>
    </Router>
  );
};
