import React, { PureComponent } from 'react';
import axios from '../Api/axios'
import imageUrl from '../Api/image-axios'
class Row extends PureComponent{
    state={
        movies:[],
        poster:[]
    }
    async componentDidMount(){
        const movies=[]
        const request= await axios.get(this.props.url)
        movies.push(request.data.results)
        this.setState({movies:movies})
        this.fetchmovies();
        
    }
    fetchmovies(){
        const poster=[]
        this.state.movies.map(movie=>{
            for(let key in movie){
                poster.push(movie[key].poster_path)
            }
            this.setState({poster:poster})
            console.log(this.state.movies)
            console.log(this.state.poster)
        })
    }
    render(){
        
        return(
            <div>
                {this.props.title}
               
                {console.log("render")} 
                {
                    this.state.poster.map((pos)=>
                    (<img src={imageUrl+pos} />))
                }
            
            </div>

        )
    }
}
export default Row;