require('dotenv').config();

const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const compression = require('compression');
const cookieSession = require('cookie-session');
const http = require('http');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;
const app = next({dev});
const router = require('./router');

const handle = app.getRequestHandler();

app
    .prepare()
    .then(() => {
        const server = express();
        const httpServer = http.Server(server);
        server.use(bodyParser.urlencoded({extended: true}));
        server.use(bodyParser.json());
        server.use(
            cookieSession({
                name: 'session',
                keys: ['key1', 'key2'],
                maxAge: 24 * 60 * 60 * 1000 // 24 hours
            })
        );

        server.get('/token/:token', (req, res) => {
            return app.render(req, res, '/token', {token: req.params.token})
        });

        server.get('/forgotPassword/:token', (req, res) => {
            return app.render(req, res, '/forgetPassword', {token: req.params.token})
        });

        server.get('/tai-lieu', (req, res) => {
            return app.render(req, res, '/document/document')
        });

        server.get('/tai-lieu/upload', (req, res) => {
            return app.render(req, res, '/upload')
        });

        server.get('/admin/category/create', (req, res) => {
            return app.render(req, res, '/admin/category/create')
        });

        server.get('/tai-lieu/:id', (req, res) => {
            return app.render(req, res, '/detail', {id: req.params.id})
        });

        server.get('/chia-se-phong-tro', (req, res) => {
            return app.render(req, res, '/document/shareRoom')
        });

        server.get('/admin/profile', (req, res) => {
            return app.render(req, res, '/admin/user/index')
        });

        server.get('/admin/category/:id', (req, res) => {
            return app.render(req, res, '/admin/category/detail', {id: req.params.id})
        });
        server.get('/viec-lam-sinh-vien', (req, res) => {
            return app.render(req, res, '/document/workForStudent')
        });

        server.get('/ho-tro', (req, res) => {
            return app.render(req, res, '/document/help')
        });

        server.get('/admin/category/:id', (req, res) => {
            return app.render(req, res, '/admin/category/detail', {id: req.params.id})
        });

        server.use('/', router);
        server.use('*/css', express.static('public/css'));
        server.get('*', (req, res) => handle(req, res));

        server.all('*', async (req, res) => {
            return handle(req, res);
        })

        httpServer.listen(port, err => {
            if (err) throw err;
            // eslint-disable-next-line no-console
            console.log(`> Custom server ready on http://localhost:${port}`);
        });
      })
    .catch(err => {
        // eslint-disable-line no-console
        console.error(err.stack);
        process.exit(1);
    });
