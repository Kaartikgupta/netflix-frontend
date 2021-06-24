import React, { Component } from "react";
import getFirebase from '../firebase'
class Form extends Component {
    state={
        email:'',
        password:''
    }
    setEmailInput=(e)=>{
        this.setState({email: e.target.value})
        
    }
    setPasswordInput=(e)=>{
        this.setState({password: e.target.value})
    }
    signOut = async () => {
        const firebaseInstance = getFirebase();
        try {
          if (firebaseInstance) {
            await firebaseInstance.auth().signOut();
            alert("Successfully signed out!");
          }
        } catch (error) {
          console.log("error", error);
        }
    };
    // firebaseInstance = getFirebase();
    signIn = async (event) => {
        const firebaseInstance = getFirebase();
        event.preventDefault();
        // console.log(firebaseInstance)
        // console.log(this.state.email)
        console.log("signin")
        try {
            if (firebaseInstance) {
              const user = await firebaseInstance
                .auth()
                .signInWithEmailAndPassword(this.state.email, this.state.password);
              console.log("user", user);
              alert("Welcome back!");
            }
          } catch (error) {
            console.log("error", error);
            alert("Invalid username or password!");
        }
    }
    render(){
        return (
            <form onSubmit={this.signIn}>
                <input type="text" placeholder="Email" onChange={this.setEmailInput} value={this.state.email}/>
                <input type="password" placeholder="Password" type="password" onChange={this.setPasswordInput}/>
                <button type="submit">Sign In</button>
                {this.props.user}
                <button onClick={this.signOut}>Sign out</button>;
            </form>
        );
    }
};

export default Form;