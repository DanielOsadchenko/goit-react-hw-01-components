import FriendList from "./Friends/FriendList";
import Profile from "./Profile/Profile";
import user from "./Profile/user.json";
import data from "./Statistics/data.json";
import friends from "./Friends/friends.json"
import Statistics from "./Statistics/Statistics";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import transactions from "./TransactionHistory/transactions.json"

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
        backgroundColor: "#e7ecf2",
      }}
    >
  <Profile
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
  />
      
  <Statistics
    title="Upload stats"
    stats={data}
      />
  <Statistics
    stats={data}
      />
      

      <FriendList friends={friends}>
  </FriendList>
      

      <TransactionHistory items={transactions} />
    </div>
  );
};


