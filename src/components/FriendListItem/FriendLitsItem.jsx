import PropTypes from "prop-types";
import css from "./FriendListItem.module.css";

const FriendListItem = ({ name, avatar, id, isOnline }) => {
  return (
    <li key={id} className={css.item}>
      <span
        className={css.status}
        style={
          isOnline
            ? { backgroundColor: "#09ec1c" }
            : { backgroundColor: "#e61515" }
        }
      ></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;

FriendListItem.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  id: PropTypes.number,
};
