import React from 'react';

class Resources extends React.Component {
  render() {
    let i=0;
    const resources = this.props.resources.map(resource => (
        <div className="row resource" key={i++}>
          <p >Description:</p>
          <p>{resource.description}</p>
          <p><a href={resource.resource}>Link</a></p>
        </div>
      ));
    return (
      <div className="row">
        {resources}
      </div>
    );
  }

}

export default Resources;
