const express = require('express')
const path = require('path')
const app = express()
app.use(express.static(path.join(__dirname, 'build')))
app.use(express.static(path.join(__dirname, 'blog')))

app.get('/blog*', function (req, res) {
	res.sendFile(path.join(__dirname, 'blog', 'index.html'))
})

app.get('/*', function (req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(process.env.PORT || 3000)
