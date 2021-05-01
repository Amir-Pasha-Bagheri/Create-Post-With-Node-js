import React, {Component} from 'react'

export default class Post extends Component {
    render(){
        return (
            <div className='Post'>
            <h4>Name : {this.props.name}</h4><br/>
            <h5>Time : {this.props.time}</h5><br/>
            <p>Price : {this.props.price} $</p>
            <p>Description : {this.props.description}</p>
            </div>
        )
    }
}