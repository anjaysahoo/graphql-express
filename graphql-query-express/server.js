const express = require('express');
const expressGraphQL = require('express-graphql');
const app = express();

const graphqlSchema = require('./graphql/schema');
const graphqlResolvers = require('./graphql/resolvers');

app.use('/graphql', expressGraphQL.graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolvers,
    graphiql: true
}));
app.listen(5000, ( ) => console.log( 'Server Running' ) );
