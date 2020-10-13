import React from 'react';

import './contact.css';

let onLine = true;

function isOnLine() {
    return (onLine ? 'status-online' : 'status-offline');
}

function isOnLineText() {
    return (onLine ? "Online" : "Offline")
}

function Contact(){
    return(
        <div className="Contact">
            <img className="avatar"
                src="https://randomuser.me/api/portraits/women/19.jpg"
                alt="contact's picture"
            />
            <div>
                <h2 className="name">Ava Duncan</h2>
                <div className="status">
                    <span className={isOnLine(onLine)}></span>
                    <div className="status-text">{isOnLineText(onLine)}</div>    
                </div>
            </div>
        </div>
    );
}

export default Contact;