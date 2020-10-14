import React from 'react';
import { ReactComponent } from 'react';
import PropTypes from 'prop-types';

import './contact.css';
import { render } from '@testing-library/react';

class Contact extends React.Component{
    constructor(props){
        super(props);
        this.state={online:this.props.online};
    }

    render(){
        return(
            <div className="Contact">
                <img className="avatar" src={this.props.avatar} alt={this.props.name}
                />
                <div>
                    <h2 className="name">{this.props.name}</h2>
                    <div className="status" onClick={event => {this.setState({online: !this.state.online});}}>
                        <span className={this.state.online ? 'status-online' : 'status-offline'}></span>
                        <div className="status-text">{this.state.online ? "Online" : "Offline"}</div>    
                    </div>
                </div>
            </div>
        );
    }
}

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired,
};
export default Contact;