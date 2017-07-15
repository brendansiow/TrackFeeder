import React, { Component } from 'react';

class FeederProfile extends React.Component {
    render() {
        return (
            <div>
                {this.props.params.id}
            </div>
        );
    }
}
export default FeederProfile;