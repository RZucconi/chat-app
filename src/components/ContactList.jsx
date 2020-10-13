import React from 'react';

import './contact.css';

const users = [
  {
    name: 'Robert Reyes',
    avatar: 'https://randomuser.me/api/portraits/men/28.jpg',
    online: false
  },
  {
    name: 'Nellie Caldwell',
    avatar: 'https://randomuser.me/api/portraits/women/17.jpg',
    online: true
  },
  {
    name: 'Vernon Mason',
    avatar: 'https://randomuser.me/api/portraits/men/84.jpg',
    online: true
  },
  {
    name: 'Erica Hunt',
    avatar: 'https://randomuser.me/api/portraits/women/87.jpg',
    online: false
  },
  {
    name: 'Juanita Phillips',
    avatar: 'https://randomuser.me/api/portraits/women/55.jpg',
    online: true
  }
];

const ContactList = () => (
    <div>
        { users.map(user => (
            <div className="Contact">
            <img className="avatar" key={user.name} src={user.avatar} alt={user.name}
            />
            <div>
                <h2 key={user.name} className="name">{user.name}</h2>
                <div className="status">
                    <span key={user.name} className={user.online ? 'status-online' : 'status-offline'}></span>
                    <div key={user.name} className="status-text">{user.online ? "Online" : "Offline"}</div>    
                </div>
            </div>
        </div>
        ))}
    </div>
)

export default ContactList;