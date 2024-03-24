import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';

// Create an instance of Apollo Client
const client = new ApolloClient({
  uri: 'your_graphql_endpoint_here',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
        <Navbar />
        <Outlet />
    </ApolloProvider>
  );
}

export default App;
