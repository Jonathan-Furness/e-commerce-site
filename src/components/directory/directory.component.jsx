import React from 'react';
import MenuItem from '../menu-item/menu-item.component';

import './directory.component.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'Hats',
          imageUrl: 'https://unsplash.com/photos/PMBHxLcQ2_c/download?force=true&w=640',
          id: 1
        }, 
        {
          title: 'Jackets',
          imageUrl: 'https://unsplash.com/photos/GIJilzvYLP8/download?force=true&w=640',
          id: 2
        },
        {
          title: 'Sneakers',
          imageUrl: 'https://unsplash.com/photos/updW-QUccFE/download?force=true&w=640',
          id: 3
        },
        {
          title: 'Womens',
          imageUrl: 'https://unsplash.com/photos/NJAFmCuIx1s/download?force=true&w=640',
          size: 'large',
          id: 4
        },
        {
          title: 'Mens',
          imageUrl: 'https://unsplash.com/photos/muWowSks60w/download?force=true&w=640',
          size: 'large',
          id: 5
        }
      ]
    }
  }

  render() {
    return(
      <div className="directory-menu">
        {
          this.state.sections.map(({title, imageUrl, id, size}) => (
            <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
            )
          )
        }
      </div>
    )
  }
}

export default Directory;