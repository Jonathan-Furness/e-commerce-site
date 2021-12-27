import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './shop.styles.scss';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import CollectionPage from '../collection/collection.component';

const ShopPage = () => (
  <div>
    <Routes>
      <Route path='' element={<CollectionsOverview />} />
      <Route path=':collectionId' element={ <CollectionPage /> }/>
    </Routes>
  </div>
)

export default ShopPage;