const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
var app = express()

const { Pool } = require('pg')
var pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'asd123',
    port: 5432
})

// var pool
// pool = new Pool({
//   connectionString: process.env.DATABASE_URL, ssl: false
// });

// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: false
// });


  app.use(express.static(path.join(__dirname, 'public')))
  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))
  app.set('views', path.join(__dirname, 'views'))
  app.set('view engine', 'ejs')
  app.get('/', (req, res) => res.render('pages/main'))
  app.get('/tokidex', (req,res) => { res.render('pages/tokidex')})
  app.get('/add', (req,res) => { res.render('pages/add')})
  app.get('/change', (req,res) => { res.render('pages/change')})
  app.get('/delete', (req,res) => { res.render('pages/delete')})
  app.get('/display', (req,res) => { res.render('pages/display')})

  app.post('/add/submit', (req,res) => {
    res.redirect('/add')
  })

  // const createUser = (request, response) => {
  //   const { name, email } = request.body
  //
  //   pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email], (error, results) => {
  //     if (error) {
  //       throw error
  //     }
  //     response.status(201).send(`User added with ID: ${result.insertId}`)
  //   })
  // }

  // app.get('/test', (req,res) => {
  //
  //   var getUsersQuery = `SELECT * FROM tokimon;`;
  //   console.log(getUsersQuery);
  //   pool.query(getUsersQuery, (error, result) => {
  //     if (error)
  //       res.end(error);
  //     var results = {'rows': result.rows };
  //     console.log(results);
  //     res.render('pages/test', results)
  //   })
  // })


//   app.get('/users/:id', (req,res) => {
//   console.log(req.params.id);
//   var userIDQuery = `SELECT * FROM tokimon WHERE uid=${req.params.id}`;
// })


  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
