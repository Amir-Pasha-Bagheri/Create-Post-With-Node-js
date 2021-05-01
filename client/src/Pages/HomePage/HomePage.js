import React ,{Component} from 'react'
import { Link } from 'react-router-dom'
import './HomePage.css'
import axios from 'axios'
import Post from '../Post'

export default class HomePage extends Component {
    state = {
        List: []
    }

    componentDidMount(){
        axios.get('http://localhost:3001/')
        .then(res=>this.setState({List:res.data}))
    }

    render(){
        return(
            <React.Fragment>
                <Link to='/Create-Post'><button>Add Post</button></Link>

                <br/>

                {this.state.List.map((post,index)=><Post key={index} name={post.name} time={post.time} price={post.price} description={post.description}/>)}

            </React.Fragment>
        )
    }
}