import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import Counter from './Counter'
import FetchData from './FetchData'
import UserPage from './UserPage'

const Home = () => (
  <div>
    <h1>Home Page</h1>
    <Link to = '/Counter'><button> Register as organization</button></Link>
    <p></p>
    <Link to = '/fetch-data'><button> Sign Up as Employee</button></Link>
    <p></p>
    <Link to = '/UserPage'><button> Find Your Organization</button></Link>
  </div>
);

export default connect()(Home);
