import FriendListItem from "./FriendListItem"
import PropTypes from 'prop-types';

export default function FriendList({friends}) {
  return <ul className="friend-list">
    {friends.map(friend => {
      return <FriendListItem
        key={friend.id}
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
        id={friend.id}
      ></FriendListItem>
    })}
</ul>
}

FriendList.propTypes = {
friends: PropTypes.array.isRequired,
}


