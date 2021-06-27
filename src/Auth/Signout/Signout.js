import getFirebase from '../firebase'
import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
 class signOut extends Component{

    signOt = async () => {
        const firebaseInstance = getFirebase();
        try {
          if (firebaseInstance) {
            await firebaseInstance.auth().signOut();
            alert("Successfully signed out!");
          }
        } catch (error) {
          console.log("error", error);
        }
    };render(){
     return(
        <NavLink to="/"><button style={{backgroundColor:"transparent", border:"none",color:"white", fontSize:"18px"}} onClick={this.signOt}>SignOut</button></NavLink>
     )
 }
}
 export default signOut