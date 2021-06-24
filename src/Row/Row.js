import React, { PureComponent } from 'react';
import axios from '../Api/axios'
import imageUrl from '../Api/image-axios'
import Classes from './photo.css'; 
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
                                <img src={imageUrl+movie.poster_path} alt={movie.original_title} key={key} className={Classes.poster}/>
                        )
                    }
                </div>
            </div>
        )
    }
}
export default Row;