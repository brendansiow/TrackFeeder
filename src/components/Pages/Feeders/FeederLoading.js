import React, { Component } from 'react';
var Halogen = require('halogen')

class FeederLoading extends Component {
    render() {
        var color = '#2C3E50';
        var style = {
            display: '-webkit-flex',
            display: 'flex',
            WebkitFlex: '0 1 auto',
            flex: '0 1 auto',
            WebkitFlexDirection: 'column',
            flexDirection: 'column',
            WebkitFlexGrow: 1,
            flexGrow: 1,
            WebkitFlexShrink: 0,
            flexShrink: 0,
            WebkitFlexBasis: '25%',
            flexBasis: '25%',
            maxWidth: '100%',
            height: '100px',
            WebkitAlignItems: 'center',
            alignItems: 'center',
            WebkitJustifyContent: 'center',
            justifyContent: 'center'
        };
        return (
            <div>
                <div style={style}><Halogen.SyncLoader color={color}/></div>
            </div>
        );
    }
}
export default FeederLoading;