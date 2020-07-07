import React, { Component } from 'react';
import Album from './Album';
import './Albums.scss';

class Albums extends Component {
  isFirstAlbum = (index) => {
    return index === 0;
  };

  render() {
    const { albums } = this.props;
    return (
      <section className="Albums" data-testid="Albums">
        {albums &&
          albums.map((album, index) => (
            <Album
              key={album.id}
              id={album.id}
              title={album.title}
              isCollapse={!this.isFirstAlbum(index)}
            />
          ))}
      </section>
    );
  }
}

export default Albums;
