import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
// @ts-ignore
import SayHello from 'say/SayHello';

const app = express();

app.get('/', async (_, res) => {
  const domString = renderToString(<SayHello />);
  return res.send(domString);
});

app.listen(8080);

export default app;
