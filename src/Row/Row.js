import React, { PureComponent } from 'react';
import axios from '../Api/axios'
import imageUrl from '../Api/image-axios'
import Classes from './photo.css'; 
import {Link} from 'react-router-dom';
class Row extends PureComponent{
    state={
        movies:[]
    }
    async componentDidMount(){
        const movies=[]
        const request= await axios.get(this.props.url)
        movies.push(request.data.results)
        this.setState({movies:movies[0]})
    }    
    render(){
        return(
            <div className={Classes.wrapper}>
                <div className={Classes.title}>
                    {this.props.title}
                </div>
                <div className={Classes.posters}>
                    {
                        this.state.movies.map((movie,key)=>
                            <div>
                            {
                                this.props.currentUser?
                                (
                                <div className={Classes.poster}>
                                    <Link to={{pathname:"/poster",search:`key=${movie.id}`,aboutProps:{movie_poster:movie.poster_path,original_name:movie.original_name,overview:movie.overview,currentUser:this.props.currentUser}}}>
                                    <img src={imageUrl+movie.poster_path} alt={movie.original_title} key={key} height="200px"  />
                                    </Link>
                                </div>
                                ):
                                (
                                <div className={Classes.poster}>
                                    <Link to="/signin">                                 
                                        <img src={imageUrl+movie.poster_path} alt={movie.original_title} key={key} height="200px"  />
                                    </Link>
                                </div>
                                )
                            }
                            </div>
                        )}
                </div>
            </div>
        )
    }
}
export default Row;