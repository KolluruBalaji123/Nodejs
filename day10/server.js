const express =require('express')
const port=4001
const app =express()
const apiRoot ='/api'
const db  ={
    'Microphone':{
        'product' :'Microphone',
        'brand':'Boat',
        'price':2000

    }
}
const cors =require('cors')
const bodyParser= require('body-parser')
app.use(bodyParser.json)
app.use(cors())
app.listen(port ,()=>{
    console.log(`server is running ${port}`)
})
const router =express.Router()
app.use(apiRoot,router)

router.get('/',(req,res)=>{
    res.send('itworks')
})