import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';

// Component Imports
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={ HomePage } />
        <Route exact path='/shop' component={ ShopPage } />
        <Route exact path='/signin' component={ SignInSignUpPage } />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
