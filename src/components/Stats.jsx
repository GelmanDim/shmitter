import Avatar from "./Avatar.jsx";
import {useContext} from "react";
import {TwitterContext} from "../utils/context.js";

const Stats = () => {
    const {user, stats, updateFollowers} = useContext(TwitterContext);

    const handleFollowersClick = (event) => {
        if (event.type === 'click') {
            updateFollowers(1);
        } else if (event.type === 'contextmenu') {
            event.preventDefault();
            updateFollowers(-1);
        }
    };

    return (
        <div className={'user-stats'}>
            <div>
                <Avatar/>
                {user.name}
            </div>
            <div className={'stats'}>
                <div onClick={handleFollowersClick} onContextMenu={handleFollowersClick}>
                    Followers: {stats.followers}
                </div>
                <div>
                    Following: {stats.following}
                </div>
            </div>
        </div>
    );
};

export default Stats;
