// import logo from './logo.svg';
import Profile from './components/profile/profile.jsx';
import user from './data/user.json'
import './App.css';
import Statistics from './components/statistics/statistics.jsx'
import data from './data/data.json'

function App() {
  return <>
  <Profile
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
    />
    {data.map(stat => <Statistics
      key={stat.id}
      title={stat.label}
      stats={stat.percentage} />)}
    </>
  // (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
