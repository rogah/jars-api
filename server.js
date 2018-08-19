// @flow

import express from 'express';
import morgan from 'morgan';
import graphqlHttp from 'express-graphql';

import { schema, root } from './schema';

const app = express();

const PORT = process.env.PORT || 4000;

app.set('port', PORT);

app.use(morgan('combined'));

app.use('/graphql', graphqlHttp({
  schema,
  rootValue: root,
  graphiql: true,
}));

app.get('/', (req, res) => res.send('Hello World!'));

export default app;
