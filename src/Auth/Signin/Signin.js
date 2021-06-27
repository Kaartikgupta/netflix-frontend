import React, { Component } from "react";
import {Redirect} from 'react-router-dom'
import getFirebase from '../firebase'
import classes from './Signin.css';
class Form extends Component {
    state={
        email:'',
        password:'',
        signin:false
    }
    componentDidMount(){
        console.log("didmount"+this.state.signin)
    }
    setEmailInput=(e)=>{
        this.setState({email: e.target.value})
        
    }
    setPasswordInput=(e)=>{
        this.setState({password: e.target.value})
    }
    signIn = async (event) => {
        const firebaseInstance = getFirebase();
        event.preventDefault();
        console.log("signin")
        try {
            if (firebaseInstance) {
              const user = await firebaseInstance
                .auth()
                .signInWithEmailAndPassword(this.state.email, this.state.password);
                this.setState({signin:true})
              console.log("user", user);
             
            }
          } catch (error) {
            console.log("error", error);
            alert("Invalid username or password!");
        }
    }
    render(){
        return (
        <div>
            <div className={classes.main}>
                <form className={classes.login}  onSubmit={this.signIn}>
                    <h1 className={classes.login__title}>Sign In</h1>
                    <div className={classes.login__group}>
                        <input className={classes.login__group__input} type="text" required="true" onChange={this.setEmailInput} value={this.state.email}/>
                        <label className={classes.login__group__label}>Email</label>
                    </div>
                    <div className={classes.login__group}>
                        <input className={classes.login__group__input} type="password" required="true" onChange={this.setPasswordInput}/>
                        <label className={classes.login__group__label}>Password</label>
                    </div>
                    <button className={classes.login__sign_in} type="button"  onClick={this.signIn }>Sign In</button>
                    {this.state.signin?<Redirect to="/" />:null}
                </form>
            </div>
        </div>
        );
    }
};

export default Form;