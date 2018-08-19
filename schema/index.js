// @flow

const { buildSchema } = require('graphql');

const schema = buildSchema(`
    type Query {
        message: String
    }
`);

const root = {
    message: () => 'Jars API'
};

module.exports = {
    schema,
    root,
};
