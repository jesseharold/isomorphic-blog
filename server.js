const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

  // *** Support for server-side clean URLs routing ***
  server.get('/p/:id', (req, res) => {
    const actualPage = '/post'
    const queryParams = { title: req.params.id } 
    app.render(req, res, actualPage, queryParams)
  })

  // *** Blog Post CRUD Routes ***

  server.get('/api/:id', (req, res) => {
      // retrieve a post's info from the db and return it
      console.log('Someone requested post ' + req.params.id);
      const requestedPage = {
          id: req.params.id,
          title: "Title of a Dummy Page",
          author: "Harry the Great",
          dateCreated: "today",
          dateUpdated: "yesterday",
          body: "A very long string with escaped characters, possibly html, not really sure how's best to store this whole post. markdown? just text for now is fine, i guess"
        };
      //check to make sure this post isn't marked as delted
      res.send(requestedPage);
  })

  server.post('/api/:id', (req, res) => {
      // save a post to the db and return it
      console.log('Someone saved post ' + req.params.id);
      // if id exists in the db, update that document
      // else, create a new one
      const newPage = {
          id: req.params.id,
          title: "Title of a Brand New Page",
          author: "Harry the Great",
          dateCreated: "today",
          dateUpdated: "just now",
          body: "A very long string with escaped characters, possibly html, not really sure how's best to store this whole post. markdown? just text for now is fine, i guess"
        };
      res.send(newPage);
  })

  server.delete('/api/:id', (req, res) => {
      // mark a post as deleted in the db
      console.log('Someone deleted post ' + req.params.id);
      // if id exists in the db, update that document
      res.send("deleted");
  })

  // *** End of CRUD Routes ***

  
  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})