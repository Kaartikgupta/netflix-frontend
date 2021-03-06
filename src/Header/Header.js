import React, { Component } from 'react';
import classes from './Header.css';
import axios from '../Api/axios';
import imageUrl from '../Api/image-axios';
import {Link } from 'react-router-dom';
class Header extends Component{
    state={
        movieHeader:{}
    }
    async componentDidMount(){
        const movie=[]
        const request= await axios.get(this.props.url)
        movie.push(request.data.results)
        this.setState({movieHeader:movie[0][Math.floor(Math.random()*movie[0].length-1)]})
    }  
    shorten=(str,n)=>{
       return str?.length>n ? str.substr(0,n-1)+"..." : str;
    }
    render(){
        return(
            <div className={classes.header} style={{backgroundSize:"cover",backgroundImage:`url(${imageUrl}${this.state.movieHeader?.backdrop_path || this.state.movieHeader?.poster_path})`,backgroundPosition:"center"}}>
                <div className={classes.headerTitle}>
                    {this.state.movieHeader?.original_name || this.state.movieHeader?.name||this.state.movieHeader?.title}
                    <div className={classes.headerOverview}>{this.shorten(this.state.movieHeader.overview,100)}</div>
                    <div className={classes.buttonGroup}>
                    <Link to={{pathname:"/poster",search:`key=main`,aboutProps:{movie_poster:this.state.movieHeader.poster_path,original_name:this.state.movieHeader.original_name,overview:this.state.movieHeader.overview,currentUser:this.props.currentUser}}}><button className={classes.button}>Play</button></Link>
                        <button className={classes.button}>My Wishlist</button>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Header;