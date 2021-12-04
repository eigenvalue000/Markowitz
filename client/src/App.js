import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages and Components Area
import Navbar from './components/Navbar';
import Portfolio from './pages/Portfolio';
import AboutUs from './pages/AboutUs';
import FAQs from './pages/FAQs';
import Login from './pages/Login';
import Question from './pages/Question';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  //link: authLink.concat(httpLink),
  //link: httpLink,
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Navbar />
          <div className="container">
          <Routes>
            <Route exact path="/" element={<Portfolio/>} />
            <Route exact path="/portfolio" element={<Portfolio/>} />
            <Route exact path="/login" element={<Login/>} />
            <Route exact path="/question" element={<Question/>} />
            <Route exact path="/faqs" element={<FAQs/>} />
            <Route exact path="/aboutus" element={<AboutUs/>} />
          </Routes>
          </div>
        </div>
      </Router>
    </ApolloProvider>
  );
}


export default App;
