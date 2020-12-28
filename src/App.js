
import {Redirect, Route, Switch  } from "react-router-dom";
import { Component } from 'react'
import {connect} from 'react-redux'
import {setCurrentUser} from './redux/user/user.action'
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selector';

import './App.css';
import { HomePage } from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';

import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import {auth, createUserProfileDocument} from './firebase/firebase.utils'

class App extends Component {
  unsubscribeFromAuth = null;
   
  componentDidMount(){
    const {setCurrentUser} = this.props;
 
  this.unsubscribeFromAuth =  auth.onAuthStateChanged(async userAuth=>{
        
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapShot=>{
         setCurrentUser({
          
             id: snapShot.id,
             ...snapShot.data()
           
         });
        });
     
      }
      setCurrentUser( userAuth)
    
    
   
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){

    return (
      <div className="App">
      <Header />
      <Switch>
      <Route exact path='/'   component={HomePage} />
      <Route  path='/shop'   component={ShopPage} />
      <Route exact path='/signin'   render={()=> this.props.currentUser? <Redirect to="/"></Redirect> :<SignInAndSignUpPage></SignInAndSignUpPage>} />     
      <Route exact path='/checkout'   component={CheckoutPage} />
    
      </Switch>
      </div>
    );
  }
 
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(
  mapStateToProps, 
  mapDispatchToProps
  )(App);
