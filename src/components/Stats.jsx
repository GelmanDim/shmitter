
const Stats = ({user, stats}) => {
    return (
        <div className={'user-stats'}>
            <div>
                {user.name}
            </div>
            <div className={'stats'}>
                <div>
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


