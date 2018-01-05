import axios from 'axios'
import * as React from 'react';

declare interface Repository {
  name: string
  url: string
  description: string
  languages: {
    edges: Array<{
      node: {
        name: string
      }
    }>
  }
}

export class Profile extends React.Component {
  state: {
    name: string,
    avatarUrl: string,
    bio: string,
    email: string,
    pinnedRepositories: {
      edges: Array<{ node: Repository }>
    }
  }

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      avatarUrl: '',
      bio: '',
      email: '',
      pinnedRepositories: {
        edges: []
      }
    }
  }

  componentDidMount() {
    axios('/github').then((r) => {
      this.setState(r.data);
    }).catch(() => {
      this.setState(this.state)
    })
  }

  render() {
    return (
      <div>
        <div className="grd measure p2">
          <div className="grd-row">
            <div className="grd-row-col-1 p1 txt--center measure">
              <h5>Avatar</h5>
              <p className="h4">
                <img src={this.state.avatarUrl} />
              </p>
            </div>
          </div>

          <div className="grd-row">
            <div className="grd-row-col-2-6 p1 txt--center">
              <h5>name</h5>
              <p className="h4 py2">
                {this.state.name}
              </p>
            </div>
            <div className="grd-row-col-2-6 p1 txt--center">
              <h5>Biography</h5>
              <p className="h4 py2">
                {this.state.bio}
              </p>
            </div>
            <div className="grd-row-col-2-6 p1 txt--center">
              <h5>Contant</h5>
              <p className="h4 py2">
                <a className="h4 py2" href="https://twitter.com/teitei_tk">{this.state.email}</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
