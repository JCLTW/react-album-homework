import React, { Component } from 'react';
import './Photos.scss';

const DISPLAY_COLUMNS = 3;
class Photos extends Component {
  render() {
    const { photos } = this.props;
    return (
      <section className="Photos">
        {' '}
        {photos &&
          photos.slice(0, DISPLAY_COLUMNS).map((photo) => (
            <div key={photo.id} className="photo">
              <img src={photo.thumbnailUrl} />
              <div>{photo.title}</div>
            </div>
          ))}
      </section>
    );
  }
}

export default Photos;
