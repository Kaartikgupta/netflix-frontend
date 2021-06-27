import React, { Component } from "react";
import getFirebase from '../firebase'
import classes from '../Signin/Signin.css'
import {Redirect } from 'react-router-dom'
class Form extends Component {
    state={
        email:'',
        password:'',
        signup:false
    }
    setEmailInput=(e)=>{
        this.setState({email: e.target.value})
        
    }
    setPasswordInput=(e)=>{
        this.setState({password: e.target.value})
    }
    signUp = async (event) => {
        const firebaseInstance = getFirebase();
        console.log(this.state.email)
        event.preventDefault();
    
        try {
          if (firebaseInstance) {
            const user = await firebaseInstance.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            console.log("user", user)
            this.setState({signup:true})
            alert(`Welcome ${this.state.email}!`);
          }
        } catch (error) {
          console.log("error", error);
          alert(error.message);
        }
    }
    render(){
        return (
            <div className={classes.main}>
                <form className={classes.login}  onSubmit={this.signUp}>
                    <h1 className={classes.login__title}>Sign Up</h1>
                    <div className={classes.login__group}>
                        <input className={classes.login__group__input} type="text" required="true" onChange={this.setEmailInput} value={this.state.email}/>
                        <label className={classes.login__group__label}>Email</label>
                    </div>
                    <div className={classes.login__group}>
                        <input className={classes.login__group__input} type="password" required="true" onChange={this.setPasswordInput}/>
                        <label className={classes.login__group__label}>Password</label>
                    </div>
                    <button className={classes.login__sign_in} type="button"  onClick={this.signUp }>Sign Up</button>
                    {this.state.signup?<Redirect to="/signin" />:null}
                </form>
            </div>
        );
    }
};

export default Form;