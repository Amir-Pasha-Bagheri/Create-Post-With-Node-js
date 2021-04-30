import React ,{Component} from 'react'
import { Link } from 'react-router-dom'
import './CreatePost.css'

export default class CreatePost extends Component {
    render(){
        return(
            <React.Fragment>
                CreatePost Page
                <br/>

                <form>
                    <div>
                        <label htmlFor='name'>Name :</label>
                        <input type='text' name='name' placeholder='Name Of Your Product' pattern=".{3,}" required autoComplete='off' />
                    </div>

                    <div>
                        <label htmlFor='price'>Price :</label>
                        <input type='number' name='price' placeholder='Your Price' required/>
                    </div>

                    <div>
                    <label htmlFor="photo"> Choose A Picture :</label><br/>
                        <input type="file" name="photo" accept="image/*" required/><br/>
                    </div>

                    <div>
                        <label htmlFor="description">Description :</label><br/>
                        <textarea rows="4" cols="30" name='description' placeholder="Write Your Description" required></textarea>
                    </div>

                    <br/>
                    <button type="submit">Finish</button>
                </form>

                <Link to='/'><button>Home Page</button></Link>

            </React.Fragment>
        )
    }
}