import React, { useContext } from 'react';
import { TwitterContext } from '../utils/context.js';

const Avatar = ({ size }) => {
    const { user, setUser } = useContext(TwitterContext);

    const newAvatar = () => {
        const newAvatarUrl = prompt("Enter new URL:");
        if (newAvatarUrl) {
            setUser({
                name:user.name,
                avatar: newAvatarUrl,
            });
        }
    };

    return (
        <img
            src={user.avatar}
            alt="User Avatar"
            className={`user-avatar ${size}`}
            onClick={newAvatar}
            style={{ cursor: 'pointer' }}
        />
    );
};

export default Avatar;
