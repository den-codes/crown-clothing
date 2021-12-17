import React from 'react';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import { Route, Switch, Redirect } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';

import { connect } from 'react-redux';
import {setCurrentUser } from './redux/user/user.actions.js';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
class App extends React.Component{
  constructor(){
    super();

    this.state = {
      currentUser: null
    };
  }
unsubscribeFromAuth = null

componentDidMount(){
  const { setCurrentUser } = this.props;

  this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    if (userAuth) {
      const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot(snapShot => {
        setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
        });
      });
    }
    
      this.setState({currentUser: userAuth});
  });
}
componentWillUnmount(){
  this.unsubscribeFromAuth();
}

render(){
  return (
    <div>
      <Header />
      <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
      <Route exact
            path='/signin'
            render={() => 
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUp />
              )
            } /*if the currentUser has already signed up
            it will redirect to the homepage, otherwise it will redirecto
            to the signin page
            */
            /> 
      </Switch>
    </div>
  );
}
} 
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user =>dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
