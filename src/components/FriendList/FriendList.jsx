import css from "./FriendList.module.css";
import FriendListItem from "components/FriendListItem/FriendLitsItem.jsx";

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(({ id, name, avatar, isOnline }) => (
        <FriendListItem
          key={id}
          name={name}
          avatar={avatar}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
};

export default FriendList;
