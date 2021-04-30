import React ,{Component} from 'react'
import { Link } from 'react-router-dom'

export default class CreatePost extends Component {
    render(){
        return(
            <React.Fragment>
                CreatePost Page
                <br/>
                <Link to='/'><button>Home Page</button></Link>
            </React.Fragment>
        )
    }
}