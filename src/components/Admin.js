import React from 'react';

export default class Admin extends React.Component {
  render() {
    return (
      <div
        className="container"
        id="admin"
        style={{
          display: (this.props.showAdmin) ? 'block' : 'none',
        }}
      >
        <ul className="nav nav-tabs" role="tablist">
          <li role="presentation" className="active">
            <a href="#home" aria-controls="home" role="tab" data-toggle="tab">Home</a>
          </li>
          <li role="presentation">
            <a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Profile</a>
          </li>
          <li role="presentation">
            <a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">Messages</a>
          </li>
          <li role="presentation">
            <a href="#settings" aria-controls="settings" role="tab" data-toggle="tab">Settings</a>
          </li>
        </ul>
        <div className="tab-content">
          <div role="tabpanel" className="tab-pane active" id="home">
            <p>{'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus excepturi vero iusto, totam repellat quod similique id enim voluptate eaque, fugit repellendus quia tempora dolorem animi asperiores, in iste. Sed.'}</p>
            <p>{'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus excepturi vero iusto, totam repellat quod similique id enim voluptate eaque, fugit repellendus quia tempora dolorem animi asperiores, in iste. Sed.'}</p>
            <p>{'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus excepturi vero iusto, totam repellat quod similique id enim voluptate eaque, fugit repellendus quia tempora dolorem animi asperiores, in iste. Sed.'}</p>
            <p>{'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus excepturi vero iusto, totam repellat quod similique id enim voluptate eaque, fugit repellendus quia tempora dolorem animi asperiores, in iste. Sed.'}</p>
            <p>{'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus excepturi vero iusto, totam repellat quod similique id enim voluptate eaque, fugit repellendus quia tempora dolorem animi asperiores, in iste. Sed.'}</p>
            <p>{'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus excepturi vero iusto, totam repellat quod similique id enim voluptate eaque, fugit repellendus quia tempora dolorem animi asperiores, in iste. Sed.'}</p>
          </div>
          <div role="tabpanel" className="tab-pane" id="profile" />
          <div role="tabpanel" className="tab-pane" id="messages" />
          <div role="tabpanel" className="tab-pane" id="settings" />
        </div>
      </div>
    );
  }
}
