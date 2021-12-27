import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.actions';

import './shop.styles.scss';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import CollectionPage from '../collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';


const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);


const ShopPage = ({ updateCollections }) => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const collectionRef = firestore.collection('collections');
    collectionRef.get().then(snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
      updateCollections(collectionsMap)
      setIsLoading(false)
    })
  }, [updateCollections]);

  return (
    <div>
      <Routes>
        <Route path='' element={<CollectionsOverviewWithSpinner isLoading={isLoading} />} />
        <Route path=':collectionId' element={ <CollectionPageWithSpinner isLoading={isLoading} /> }/>
      </Routes>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);