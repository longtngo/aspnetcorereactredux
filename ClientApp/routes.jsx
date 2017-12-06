import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './components/Home';
import Counter from './components/Counter';
import FetchData from './components/FetchData';

export const routes = <Layout>
  <Route exact path='/' component={Home} />
  <Route path='/counter' component={Counter} />
  <Route path='/fetchdata/:startDateIndex?' component={FetchData} />
  {/* <Route path='/fetchdata' component={FetchData} /> */}
</Layout>;

