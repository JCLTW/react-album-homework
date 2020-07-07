import React, { Component } from 'react';
import Photos from '../Photos/Photos';
import { fetchPhotos } from '../apiUtil';

class Album extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      isCollapse: true,
    };
  }

  componentDidMount() {
    const { id, isCollapse } = this.props;
    fetchPhotos(id).then((photos) => {
      this.setState({
        photos,
        isCollapse,
      });
    });
  }

  hanldeAlbumClick = () => {
    const { isCollapse } = this.state;
    this.setState({
      isCollapse: !isCollapse,
    });
  };

  render() {
    const { isCollapse, photos } = this.state;
    const { id, title } = this.props;
    return (
      <div key={id} className="album" onClick={this.hanldeAlbumClick}>
        <p className="title">{title}</p>
        {!isCollapse && <Photos albumID={id} photos={photos} />}
      </div>
    );
  }
}

export default Album;
