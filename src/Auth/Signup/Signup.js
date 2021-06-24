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
    // firebaseInstance = getFirebase();
    signUp = async (event) => {
        const firebaseInstance = getFirebase();
        // console.log(firebaseInstance)
        console.log(this.state.email)
        event.preventDefault();
    
        try {
          if (firebaseInstance) {
            const user = await firebaseInstance.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            console.log("user", user)
            alert(`Welcome ${this.state.email}!`);
          }
        } catch (error) {
          console.log("error", error);
          alert(error.message);
        }
    }
    render(){
        return (
            <form onSubmit={this.signUp}>
                <input type="text" placeholder="Email" onChange={this.setEmailInput} value={this.state.email}/>
                <input type="password" placeholder="Password" type="password" onChange={this.setPasswordInput}/>
                <button type="submit">Sign up</button>
            </form>
        );
    }
};

export default Form;