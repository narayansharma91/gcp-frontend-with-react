const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware')
const app = express();
const path = require('path')
app.use(express.static(path.join(__dirname, '../', 'build'), {index: false}));
app.use('/api', createProxyMiddleware({
    target: '/',
    changeOrigin: true
}));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'build', 'index.html'));
})
app.listen(3001);