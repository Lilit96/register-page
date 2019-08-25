import React from 'react';

class Profile extends React.Component{
    render() {
        return <div className="container profile row" >
            <img className="col-4" src={this.props.location.state.info.file} alt="profile" />
            <div className="col-8">
                <p>{this.props.location.state.info.name}</p>
                <hr />
                <p>{this.props.location.state.info.education}</p>
            </div>
        </div>
    }
}

export default Profile