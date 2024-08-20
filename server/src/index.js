const express = require('express')
const redis = require('redis')
const cookieParser = require('cookie-parser')
const uuid = require('uuid')
const utils = require('./utils')
const constants = require('./constants')



const app = express()

const client = redis.createClient()
client.on('error',(err)=>{
    console.log(error)
})
client.connect()


app.use(cookieParser())


app.post('/temp-login',async (req,res)=>{
    const currentTime = Math.floor(Date.now()/1000)
    const uuidd = uuid.v4()
    const sessionId = `temp:${uuidd}`
    let layoutAssigned = ''
    let layoutUserMapping = {...constants.layoutUserMapping}

    let mapping = await client.get('layoutUserMapping');
    if(mapping){
        mapping = JSON.parse(mapping)
        layoutAssigned = utils.reduceLayouts(mapping)['key']
        mapping[layoutAssigned]++
        client.set("layoutUserMapping",JSON.stringify(mapping))
    }else{
        layoutAssigned = 1
        layoutUserMapping[1]++
        client.set("layoutUserMapping",JSON.stringify(layoutUserMapping))
    }

    const value  = {"currentTime":currentTime,layout:layoutAssigned}
    client.hSet("tempSession",sessionId,JSON.stringify(value))

    res.cookie('sessionId',sessionId,{
        path:'/',
        httpOnly:false,
        secure:true,
        sameSite:'None'
    })
    res.json({layout:layoutAssigned})
})
app.listen(constants.PORT,()=>{
    console.log('app has been started')
})