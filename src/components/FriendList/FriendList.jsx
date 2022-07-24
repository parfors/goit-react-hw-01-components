import css from "./FriendList.module.css";

const FriendList = ({ children }) => {
  return <ul className={css.friendList}>{children}</ul>;
};

export default FriendList;
