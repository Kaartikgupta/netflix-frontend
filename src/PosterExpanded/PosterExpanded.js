import React from 'react';
import Navbar from '../Navbar/Navbar';
import classes from './PosterExpanded.css'
import PosterHeader from '../PosterHeader/PosterHeader';
const PosterExpanded=(props)=>{
    return(
        <div className={classes.none}>
            <Navbar currentUser={props.location.aboutProps.currentUser} />
            <PosterHeader moviePoster={props.location.aboutProps.movie_poster} original_name={props.location.aboutProps.original_name} overview={props.location.aboutProps.overview} />
        </div>
    )
}

export default PosterExpanded;