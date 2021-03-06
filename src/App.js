import React, { useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';

import { setCurrentUser } from './redux/user/user.actions';

// Component Imports
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';
import SignInSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils'

const App = ({ setCurrentUser }) => {

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        
        if (userRef) {
          userRef.onSnapshot(snapShot => {
            setCurrentUser({
                currentUser: {
                  id: snapShot.id,
                  ...snapShot.data()
                }
              })
          });
        }
      }
      setCurrentUser({currentUser: null});
    })

    return () => unsubscribeFromAuth()
  }, [setCurrentUser])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={ <HomePage/> } />
        <Route path='/shop/*' element={ <ShopPage/> } />
        <Route path='/signin' element={ <SignInSignUpPage/> } />
        <Route path='/checkout' element={ <CheckoutPage/>} />
      </Routes>
      <Footer />
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
})


export default connect(null, mapDispatchToProps)(App);
