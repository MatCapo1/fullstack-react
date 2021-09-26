import express from 'express'

const app = express()

import devBundle from './devBundle'
const app = express()
devBundle.compile(app)

import path from 'path'
const CURREN_WORKING_DIR = process.cwd()
app.use('/dist', express.static(path.join(CURREN_WORKING_DIR,'dist')))

import template from './../template'
app.get ('/', (req, res) => {
    res.status(200).send(template ())
})

let port = procces.env.PORT || 3000
app.listen(port, function onStart(err) {
    if (err){
        console.log(err)
    }
    console.info('Server started on port %s.', port)
})

import { MongoClient } from 'mongodb'
const url = procces.env.MONGODB_URI || 
    'mongodb://localhost:27017/mernSimpleSetup'
    MongoClient.connect(url, (err, db) => {
        console.log("Connected successfully to mongodb server")
        db.close ()
    })