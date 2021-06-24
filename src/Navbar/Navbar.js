import React from 'react';
import classes from './navbar.css';
import { NavLink } from 'react-router-dom';
const navbar=()=>(
    <div className={classes.navbar}>
        <div className={classes.title} >
            <img />
            <ul className={classes.menu}>
                <li className="NavigationItem"><NavLink to="/signin">SignIn</NavLink></li>
                <li className="NavigationItem"><NavLink to="/signup">SignUp</NavLink></li>
            </ul>
        </div>
        
        
    </div>
)
    
export default navbar;