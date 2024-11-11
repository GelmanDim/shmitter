import Stats from './Stats.jsx';
import Avatar from './Avatar.jsx';

const Sidebar = ({ user, stats, changeAvatar }) => {
    return (
        <div className="sidebar">
            <Stats user={user} stats={stats} changeAvatar={changeAvatar} />
            <Avatar user={user} changeAvatar={changeAvatar} />
        </div>
    );
};

export default Sidebar;

