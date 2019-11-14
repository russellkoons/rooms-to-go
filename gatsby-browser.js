import React from 'react';

import Layout from './src/components/layout';

// In order to maintain the state of the cart between pages I used the Gatsby Browser to keep the Layout the same component as opposed
// to reloading the component whenever I changed pages

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);