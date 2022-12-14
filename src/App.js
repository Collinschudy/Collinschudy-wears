
import './App.css';

import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import './App.css';
import { connect } from 'react-redux';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-and-sign-up.component';
import { onSnapshot } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { createUserProfileDocument } from './firebase/firebase.utils';
import { auth } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.action';


class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser}  = this.props;

    this.unsubscribeFromAuth = onAuthStateChanged(auth, async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        onSnapshot(userRef, (snapShot) => {         
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
    
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={()=> 
            this.props.currentUser ? (
            <Redirect to='/' />) :  (
            <SignInSignUpPage /> 
            )
           }
            />
        </Switch>


      </div>
    )
  }
}

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
});
const mapDispatchToProps = dispatch => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user))
});


export default connect(
  mapStateToProps, 
  mapDispatchToProps)(App);