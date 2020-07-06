import React, { Component } from 'react';
import './UserInfo.scss';

class UserInfo extends Component {
  render() {
    const { name, email, phone, website, company } = this.props.user;

    return (
      <aside className="UserInfo" data-testid="user-info">
        <h1>{name}</h1>
        <div className="sub-title">Contract Me@</div>
        <div className="row">
          <label>Email</label>
          <div data-testid="email" className="data highlight">
            {email}
          </div>
        </div>
        <div className="row">
          <label>Phone</label>
          <div data-testid="phone" className="data highlight">
            {phone}
          </div>
        </div>
        <div className="row">
          <label>Website</label>
          <div data-testid="website" className="data highlight">
            {website}
          </div>
        </div>
        <div className="row">
          <label>Company</label>
          <div data-testid="company" className="data">
            {company && company.name}
          </div>
        </div>
      </aside>
    );
  }
}

export default UserInfo;
