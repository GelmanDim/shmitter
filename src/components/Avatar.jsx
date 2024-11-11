
const Avatar = ({ user, changeAvatar, size }) => {
    const handleAvatarChange = () => {
        const newAvatarUrl = prompt("Enter new URL:");
        if (newAvatarUrl) {
            changeAvatar(newAvatarUrl);
        }
    };

    return (
        <img
            className={`user-avatar ${size ?? ''}`}
            src={user.avatar}
            alt="User Avatar"
            onClick={handleAvatarChange}
            style={{ cursor: 'pointer' }}
        />
    );
};

export default Avatar;
