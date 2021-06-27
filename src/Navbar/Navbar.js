import React,{useState} from 'react';
import classes from './navbar.css';
import { NavLink } from 'react-router-dom';
import SignOut from '../Auth/Signout/Signout';
const Navbar=(props)=>{
    const [navbar, setNavbar]=useState(false);
    const changeBackground=()=>{
        if(window.scrollY>=100){
            setNavbar(true)
        }
        else{
            setNavbar(false)
        }
    }
    window.addEventListener('scroll', changeBackground)

   return( <div className={navbar?[classes.navbar,classes.active].join(' '):classes.navbar}>
        <div className={classes.title} >
            <img alt="netflix" src="https://media.wired.com/photos/592682057034dc5f91bebab8/4:3/w_929,h_697,c_limit/NetflixLogo2016.jpg" height="35px" width="35px"/>
            {
                props.currentUser?
                <ul className={classes.menu}>
                    <li className="NavigationItem"><NavLink to="/signout"><SignOut /></NavLink></li> 
                </ul>:
                <ul className={classes.menu}>
                    <li className="NavigationItem"><NavLink to="/signin">SignIn</NavLink></li>
                    <li className="NavigationItem"><NavLink to="/signup">SignUp</NavLink></li>
                </ul>
            }
        </div>
        
        
    </div>)
}
    
export default Navbar;