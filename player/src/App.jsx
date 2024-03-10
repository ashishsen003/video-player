import './App.css';
import ReactPlayer from 'react-player'
import VideoList from './components/VideoList';
import AllRoutes from './routers/AllRoutes';
// import ReactPlayer from 'react-player/youtube''
// import ReactPlayer from 'react-player/lazy'


function App() {

  return (
    <div className="App">
        {/* <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' /> */}
        <AllRoutes />
    </div>
  );
}

export default App;
