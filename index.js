const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');
require('dotenv').config()

const MONGODB = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.wpms4q6.mongodb.net/?retryWrites=true&w=majority`;

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

const server = new ApolloServer({
    typeDefs,
    resolvers
});

mongoose.connect(MONGODB, {useNewUrlParser: true})
    .then( () => {
        console.log("Connected to MONGODB");
        return server.listen({port: 5000});
    })
    .then( (res) => {
        console.log(`Server running at ${res.url}`);
    });