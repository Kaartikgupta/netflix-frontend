import React, {Component,useState, useEffect} from 'react';
import getFirebase from './Auth/firebase';
import SignUp from './Auth/Signup/Signup';
import SignIn from './Auth/Signin/Signin';
import Home from './Home/home';
import { Route, Switch} from 'react-router-dom';
const App=()=>  {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const firebase = getFirebase();

    if (firebase) {
      firebase.auth().onAuthStateChanged((authUser) => {
        if (authUser) {
          setCurrentUser(authUser.email);
        } else {
          setCurrentUser(null);
        }
      });
    }
  }, []);
    return (
      <div>
        <Switch>
          <Route path="/signup" component={SignUp}></Route> 
          <Route path="/signin" component={SignIn}></Route> 
          <Route path="/" exact component={Home}></Route> 
        </Switch>
        {/* <SignIn user={currentUser}/> */}
        

      </div>
    );
  
}

export default App;
