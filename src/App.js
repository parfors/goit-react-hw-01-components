// import logo from './logo.svg';
import Profile from "components/profile/Profile.jsx";
import user from "data/user.json";
import "App.css";
import Statistics from "components/statistics/Statistics.jsx";
import stats from "data/stats.json";
import FriendList from "components/FriendList/FriendList";
import friends from "data/friends.json";
import FriendListItem from "components/FriendListItem/FriendLitsItem.jsx";
import TransactionHistory from "components/TransactionHistory/TransactionHistory";
import transactions from "data/transactions.json";

function App() {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={stats} />
      <FriendList friends={friends}>
        {friends.map((friend) => (
          <FriendListItem
            key={friend.id}
            name={friend.name}
            avatar={friend.avatar}
          />
        ))}
      </FriendList>
      <TransactionHistory transactions={transactions} />
    </>
  );
}
export default App;
