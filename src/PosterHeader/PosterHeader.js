import React, { Component } from 'react';
import classes from './PosterHeader.css';
import imageUrl from '../Api/image-axios';
class Header extends Component{
    render(){
        return(
        <div>            
            <div className={classes.header} style={{backgroundImage:`url(${imageUrl}${this.props.moviePoster})`}}></div> 
            <div className={classes.headerTitle}>
                {this.props.original_name}
                <div className={classes.headerOverview}>{this.props.overview}</div>
            </div>
        </div>
        )
    }
}

export default Header;