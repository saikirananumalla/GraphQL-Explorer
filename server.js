// interface for our api, what the client can request
import {ApolloServer} from "@apollo/server";
import {startStandaloneServer} from "@apollo/server/standalone";

const typeDefs = `
    #graphql
    #this is optional
    schema {
        query: Query
    }
    
    type Query {
       greeting: String
    }
`;

// how to return actual values
const resolvers = {
    Query: {
        greeting: () => 'Hello World!',
    },
}

const server = new ApolloServer({ typeDefs, resolvers });
const {url} = await startStandaloneServer(server, {listen: {port:9000}});

console.log(`Server running at ${url}`);
