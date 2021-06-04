import React from 'react';

import Directory from '../../components/directory/directory.component';
import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';

const HomePage = ({ history }) => (
  <div>
    <Header />
      <Directory />
    <Footer />
  </div>
)

export default HomePage;