// import logo from './logo.svg';
import Profile from "components/Profile/Profile.jsx";
import user from "data/user.json";
import "App.css";
import Statistics from "components/Statistics/Statistics.jsx";
import stats from "data/stats.json";
import FriendList from "components/FriendList/FriendList";
import friends from "data/friends.json";
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
      <FriendList friends={friends} />

      <Statistics title="Upload stats" stats={stats} />

      <TransactionHistory transactions={transactions} />
    </>
  );
}
export default App;
