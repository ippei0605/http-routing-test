/**
 * @file IBM Cloud CF HTTP Routing Test
 * @author Ippei SUZUKI
 */

'use strict';

// モジュールを読込む。
const
    cfenv = require('cfenv'),
    express = require('express'),
    favicon = require('serve-favicon'),
    morgan = require('morgan'),
    os = require('os');

// アプリケーションを作成する。
const
    app = express(),
    appEnv = cfenv.getAppEnv();

// ミドルウェアを設定する。
app.use(morgan('combined'));
app.use(favicon(__dirname + '/public/favicon.ico'));

app.get('/', (req, res) => {
    res.send(os.hostname() + '\n');
});

// リクエトを受付ける。
app.listen(appEnv.port, () => {
    console.log("server starting on " + appEnv.url);
});