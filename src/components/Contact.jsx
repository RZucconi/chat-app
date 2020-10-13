import React from 'react';
import PropTypes from 'prop-types';

import './contact.css';

function Contact({ name, avatar, online }){
    return(
        <div className="Contact">
            <img className="avatar" src={avatar} alt={name}
            />
            <div>
                <h2 className="name">{name}</h2>
                <div className="status">
                    <span className={online ? 'status-online' : 'status-offline'}></span>
                    <div className="status-text">{online ? "Online" : "Offline"}</div>    
                </div>
            </div>
        </div>
    );
}

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired,
};
export default Contact;