import React from 'react';

import './footer.styles.scss';

const curr_date = new Date();

const Footer = () => (
  <div className='footer'>
    <h5>{curr_date.getFullYear()}</h5>
  </div>
)

export default Footer;