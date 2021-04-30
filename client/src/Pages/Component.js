import HomePage from './HomePage/HomePage'
import CreatePost from './CreatePost/CreatePost'

const homepage = () => {return <HomePage/>}
const createpost = () => {return <CreatePost/>}
const notfound = () => {return <h1>Not Found , please go back</h1>}

export{
    homepage,
    createpost,
    notfound
}