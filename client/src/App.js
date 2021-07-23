import logo from './logo.svg';
import './App.css';
import VideoPlayer from './components/VideoPlayer';
import Options from './components/Options';
import Notifications from './components/Notifications';

function App() {
  return (
    <div className="App">
    <h1>Tot Chat</h1>
      <VideoPlayer/>
      {/* <Options>
        <Notifications/>
      </Options> */}
    </div>
  );
}

export default App;
