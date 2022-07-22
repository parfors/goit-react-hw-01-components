import PropTypes from 'prop-types'

const FriendListItem = ({ name, avatar, id }) => {
    return <li key={id} className="item">
            <span className="status"></span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
            </li>
}

export default FriendListItem

FriendListItem.propTypes = {
    name: PropTypes.string,
    avatar: PropTypes.string,
    id: PropTypes.number,
}