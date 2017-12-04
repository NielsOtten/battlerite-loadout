/* eslint-disable */
import React from 'react';
import express from 'express';
import compression from 'compression';
import mongoose from 'mongoose';
import cache from 'cache-control';
import bodyParser from 'body-parser';
import { ServerStyleSheet } from 'styled-components';
import { renderToString } from 'react-dom/server';
import { AppContainer } from 'react-hot-loader';
import { StaticRouter } from 'react-router';
import Helmet from 'react-helmet';
import api from './api';
import { head, main, footer } from './template';
import Root from '../components/Root';
import Champion from '../models/Champion';

const clientAssets = require(process.env.RAZZLE_ASSETS_MANIFEST);; // eslint-disable-line import/no-dynamic-require
const app = express();

const mongoURL = process.env.MONGODB_URI || 'mongodb://localhost/battlerite';
mongoose.connect(mongoURL, { useMongoClient: true }, (ignore, connection) => {
  connection.onOpen();
}).then(() => { console.info('connected'); }).catch(console.error);

// Remove annoying Express header addition.
app.disable('x-powered-by');

// Compress (gzip) assets in production.
app.use(compression());

// Add bodyParser for json.
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(bodyParser.json());

// Add caching to the app
app.use(cache({
  '/*.html': 0, // Do not cache the index.html since the js file names change
  '/*.js': 31536000,
  '/*.css': 31536000,
  '/*.(jpg|jpeg|png|gif|JPG|JPEG|PNG|GIF)': 31536000,
}));

// Setup the public directory so that we can server static assets.
app.use(express.static(process.env.RAZZLE_PUBLIC_DIR));

app.get('/robots.txt', async (req, res) => {
  const url = 'https://' + req.get('host');
  res.type('text/plain');
  res.send(`# robots.txt\n\nUser-agent: *\nAllow: *\nSitemap: ${url}/sitemap.xml`);
});

// Setup api routes.
app.use('/api', api);

/**
 * We wrap the React middleware inside a wrap function, so async error don't fail silently
 * but are shown on the page.
 *
 * @see https://strongloop.com/strongblog/async-error-handling-expressjs-es7-promises-generators/
 *
 * TODO: Create fallback middleware that shows nice error page
 */
let wrap = fn => (...args) => fn(...args).catch(args[2])

// Setup server side routing.
app.get('*', wrap(async (req, res) => {
  res.type('text/html');

  const context= {};

  const ServerRoot = (
    <AppContainer>
      <StaticRouter location={req.url} context={context}>
        <Root />
      </StaticRouter>
    </AppContainer>
  );

  const sheet = new ServerStyleSheet();
  const root = renderToString(sheet.collectStyles(ServerRoot));

  const helmet = Helmet.renderStatic();

  res.write(head({
    helmet,
    stylesheet: sheet.getStyleTags(),
    fonts: [],
  }));

  res.write(main({
    root,
    helmet,
  }));

  res.flush();

  res.write(footer({
    mainJSBundle: clientAssets.client.js,
  }));

  res.end();
}));

export default app;
