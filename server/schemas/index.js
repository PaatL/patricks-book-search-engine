const { mergeTypeDefs, mergeResolvers } = require('@graphql-tools/merge');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

// Merge type definitions and resolvers if needed
const mergedTypeDefs = mergeTypeDefs([typeDefs]);
const mergedResolvers = mergeResolvers([resolvers]);


module.exports = {
    typeDefs:mergedTypeDefs,
    resolvers: mergedResolvers
};