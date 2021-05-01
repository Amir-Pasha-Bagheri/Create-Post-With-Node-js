const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json());
app.use(cors())

const List = [
    {
        name:'Shoes',
        time:'3/6/2021',
        price:'10',
        description:'These Are My Blue Shoes...'
    }
]

app.get('/',(req,res)=>{
    res.send(List)
})

app.post('/Create-Post',(req,res)=>{
    const newPost = {
        name:req.body.name,
        time:req.body.time,
        price:req.body.price,
        description:req.body.description
    }
    List.unshift(newPost)
    res.send('/')
})

app.listen(3001,console.log('Running On Port 3001...'))