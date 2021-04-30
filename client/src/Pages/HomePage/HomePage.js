import React ,{Component} from 'react'
import { Link } from 'react-router-dom'
import './HomePage.css'

export default class HomePage extends Component {
    render(){
        return(
            <React.Fragment>
                <Link to='/Create-Post'><button>Add Post</button></Link>
            </React.Fragment>
        )
    }
}