import Avatar from './Avatar.jsx';

const Navigation = ({ user, changeAvatar }) => {
    return (
        <div className={'nav'}>
            <Avatar user={user} changeAvatar={changeAvatar} size={'small'} />
        </div>
    );
};

export default Navigation;
