import axios from 'axios'
import React ,{Component} from 'react'
import { Link } from 'react-router-dom'
import './CreatePost.css'
import history from '../history'

export default class CreatePost extends Component {
    render(){

        const SendPost = (e) =>{
            e.preventDefault()
            //Create Date
            let date = new Date();
            const dd = String(date.getDate()).padStart(2, '0');
            const mm = String(date.getMonth() + 1).padStart(2, '0');
            const yyyy = date.getFullYear();
            
            date = yyyy + '/' + mm + '/' + dd;

            //Connect Server
            axios.post('http://localhost:3001/Create-Post/',{
                name : document.getElementById('name').value,
                price : document.getElementById('price').value,
                time : date,
                description : document.getElementById('description').value
            })
            .then(res=>history.push(`${res.data}`))
        }

        return(
            <React.Fragment>
                CreatePost Page
                <br/>

                <h3 id='Message' style={{display:'none'}}>Done !</h3>

                <form method='POST' onSubmit={SendPost} action='/'>
                    <div>
                        <label htmlFor='name'>Name :</label>
                        <input id='name' type='text' name='name' placeholder='Name Of Your Product' pattern=".{3,}" required autoComplete='off' />
                    </div>

                    <div>
                        <label htmlFor='price'>Price :</label>
                        <input id='price' type='number' name='price' placeholder='Your Price' required/>
                    </div>

                    <div>
                        <label htmlFor="description">Description :</label><br/>
                        <textarea id='description' rows="4" cols="30" name='description' placeholder="Write Your Description" required></textarea>
                    </div>

                    <br/>
                    <button type="submit">Finish</button>
                </form>

                <Link to='/'><button>Home Page</button></Link>

            </React.Fragment>
        )
    }
}